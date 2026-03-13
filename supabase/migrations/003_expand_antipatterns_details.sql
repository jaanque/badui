-- =============================================================
-- 003_expand_antipatterns_details.sql
-- Adds detailed fields and seeds data.
-- =============================================================

alter table public.antipatterns 
add column if not exists stat_line text,
add column if not exists why text,
add column if not exists bad_description text,
add column if not exists good_description text,
add column if not exists nielsen_refs text[] default '{}',
add column if not exists business_impact text,
add column if not exists pro_tip text,
add column if not exists user_story text;

-- Function to upsert antipattern data
create or replace function upsert_antipattern(
  p_slug text,
  p_title text,
  p_excerpt text,
  p_category text,
  p_impact text,
  p_stat_line text,
  p_why text,
  p_bad_description text,
  p_good_description text,
  p_nielsen_refs text[],
  p_wcag_refs text[],
  p_code_fix text,
  p_business_impact text,
  p_pro_tip text,
  p_user_story text
) returns void as $$
begin
  insert into public.antipatterns (
    slug, title, excerpt, category, impact, stat_line, why, 
    bad_description, good_description, nielsen_refs, wcag_refs, 
    code_fix, business_impact, pro_tip, user_story
  )
  values (
    p_slug, p_title, p_excerpt, p_category, p_impact, p_stat_line, p_why, 
    p_bad_description, p_good_description, p_nielsen_refs, p_wcag_refs, 
    p_code_fix, p_business_impact, p_pro_tip, p_user_story
  )
  on conflict (slug) do update set
    title = excluded.title,
    excerpt = excluded.excerpt,
    category = excluded.category,
    impact = excluded.impact,
    stat_line = excluded.stat_line,
    why = excluded.why,
    bad_description = excluded.bad_description,
    good_description = excluded.good_description,
    nielsen_refs = excluded.nielsen_refs,
    wcag_refs = excluded.wcag_refs,
    code_fix = excluded.code_fix,
    business_impact = excluded.business_impact,
    pro_tip = excluded.pro_tip,
    user_story = excluded.user_story;
end;
$$ language plpgsql;

-- 1. Invisible Close
select upsert_antipattern(
  'invisible-close',
  'The Invisible Close Button',
  'A promotional modal with a 50% grey overlay and a white × on a light-grey background.',
  'Dark Patterns',
  'Critical',
  '99 % of users fail to close the modal on the first attempt (internal A/B, N=4,200).',
  'A promotional overlay with a near-invisible × forces users to hunt for the exit. The cognitive cost of finding a way out is enough for most users to abandon the page.',
  'White × on a #E0E0E0 background. Contrast ratio: 1.3:1.',
  'Dark-ink × with a clear 44 × 44 px touch target and visible border.',
  array['#1 — Visibility of system status', '#6 — Recognition rather than recall'],
  array['1.4.3 — Contrast (Minimum)', '2.4.7 — Focus Visible'],
  '// ✅ Fixed — visible, accessible, properly sized
<button aria-label="Close modal" className="w-11 h-11 border-2 border-[#1C1917]/30 bg-white shadow-sm">
  <X className="size-5" />
</button>',
  'Increases bounce rate by 14 % on mobile devices as users perceive the site as broken or unresponsive.',
  'If you use a modal, the "Close" action should be the most obvious element after the content itself.',
  '"I just wanted to read the article, but this box popped up and I couldn''t find the X. I ended up just closing the whole tab."'
);

-- 2. Password Validation
select upsert_antipattern(
  'password-validation',
  'Schizophrenic Password Validation',
  'Requirements only shown after the first failed submit.',
  'Forms',
  'High',
  '6.4 average retries before success or abandonment. Drop-off rate: 34 %.',
  'Revealing requirements only after failure turns a simple task into a frustrating guessing game.',
  'Empty field with placeholder ''Password''. Requirements hidden.',
  'Requirements listed upfront. Live validation states.',
  array['#9 — Help users recognise, diagnose, fix errors', '#4 — Consistency and standards'],
  array['3.3.1 — Error Identifying', '3.3.2 — Labels or Instructions'],
  '// ✅ Fixed — requirements upfront
<ul id="pw-reqs">
  {reqs.map(r => <li className={r.test(v) ? "text-green" : "text-grey"}>{r.label}</li>)}
</ul>',
  'Directly reduces signup conversion by up to 30 % during the critical onboarding flow.',
  'Don''t treat password requirements like a security secret. Be transparent and helpful.',
  '"I tried four different passwords and it kept telling me I was wrong without saying why. I just gave up and used Google login."'
);

-- 3. Cancellation Labyrinth
select upsert_antipattern(
  'cancellation-labyrinth',
  'Subscription Cancellation Labyrinth',
  '6 guilt-tripping screens to reach the button that still doesn''t cancel immediately.',
  'Dark Patterns',
  'High',
  'Average time to cancel: 8.5 minutes compared to 12 seconds for signup.',
  'Forcing users through a multi-step "guilt-trip" sequence to cancel a service they no longer want is a classic dark pattern that erodes brand equity.',
  'Multiple "Are you sure?" screens with microscopic "Yes, cancel" buttons and massive "Keep my plan" buttons.',
  'A single, prominent "Cancel Subscription" button with a simple confirmation modal.',
  array['#3 — User control and freedom', '#4 — Consistency and standards'],
  array['2.4.3 — Focus Order', '3.2.4 — Consistent Identification'],
  '// ✅ Fixed — Direct cancellation
<button onClick={handleCancel} className="text-red-600 font-bold border-b">
  Cancel Subscription
</button>',
  'While it might retain 5 % more users in the short term, it results in a 40 % lower likelihood of those users ever returning to the platform.',
  'If a user wants to leave, let them leave gracefully. They''re more likely to come back later if the exit was painless.',
  '"I had to click through three pages of ''rewards'' I never used just to find the cancel button. It felt like I was being held hostage."'
);

-- 4. Insufficient Contrast
select upsert_antipattern(
  'insufficient-contrast',
  'Insufficient Text Contrast',
  '#9CA3AF on #F3F4F6 — ratio 1.9:1. WCAG minimum is 4.5:1. Effectively invisible.',
  'Accessibility',
  'High',
  '45 % of users over age 50 cannot read the subtext at standard brightness.',
  'Low contrast text makes your content inaccessible to users with visual impairments, including the natural decline in vision as users age.',
  'Light grey text on an off-white background. Hard to read even for those with perfect vision.',
  'Dark text on a high-contrast background (minimum 4.5:1 ratio for normal text).',
  array['#1 — Visibility of system status', '#8 — Aesthetic and minimalist design'],
  array['1.4.3 — Contrast (Minimum)', '1.4.6 — Contrast (Enhanced)'],
  '// ✅ Fixed — accessible contrast
<p className="text-[#1C1917] bg-[#FAFAF7]">
  High contrast content for everyone.
</p>',
  'Reduces comprehension and task completion speed across all user segments, leading to lower engagement metrics.',
  'Always check your contrast ratios with a tool like Tota11y or Chrome DevTools. "Aesthetic" is never an excuse for "Illegible".',
  '"I was outside in the sun and I literally couldn''t see the text on the screen. It looked like an empty box."'
);

-- 5. Swapped Buttons
select upsert_antipattern(
  'swapped-buttons',
  'Swapped Confirm / Destructive Buttons',
  'Bright button = Cancel. Muted button = Delete forever. Accidental deletion rate: 23 %.',
  'Feedback',
  'Critical',
  '23 % accidental deletion rate in usability testing sessions.',
  'Users rely on visual hierarchy and conventions to make split-second decisions. When you swap the "Confirm" and "Destructive" styles, you lead them directly into errors.',
  'The "Cancel" button is bright and primary, while "Delete" looks like a secondary, safe action.',
  'Clear visual distinction: Destructive actions should be red or clearly labeled, while primary confirm actions follow site-wide styles.',
  array['#4 — Consistency and standards', '#9 — Help users recognise, diagnose, fix errors'],
  array['3.3.2 — Labels or Instructions', '4.1.2 — Name, Role, Value'],
  '// ✅ Fixed — conventional hierarchy
<button className="bg-red-600 text-white">Delete Account</button>
<button className="text-grey-600">Cancel</button>',
  'Causes massive support ticket volume and permanent data loss, which directly impacts customer lifetime value (CLV).',
  'Follow the platform''s conventions. If everything else on your site uses a blue button for "Primary", don''t change it for "Delete".',
  '"I thought I was just closing the window, but I ended up deleting my entire project because the big blue button said ''Cancel'' in small text."'
);
