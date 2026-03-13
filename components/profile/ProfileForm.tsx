"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

interface Profile {
  id: string;
  username: string | null;
  display_name: string | null;
  bio: string | null;
  avatar_url: string | null;
  website: string | null;
}

export function ProfileForm({ profile }: { profile: Profile }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [displayName, setDisplayName] = useState(profile.display_name || "");
  const [username, setUsername] = useState(profile.username || "");
  const [bio, setBio] = useState(profile.bio || "");
  const [website, setWebsite] = useState(profile.website || "");

  const supabase = createClient();

  async function updateProfile() {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      const { error } = await supabase
        .from("profiles")
        .update({
          display_name: displayName,
          username,
          bio,
          website,
          updated_at: new Date().toISOString(),
        })
        .eq("id", profile.id);

      if (error) throw error;
      setSuccess(true);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Display Name */}
        <div className="space-y-2">
          <label htmlFor="displayName" className="text-[11px] font-black uppercase tracking-widest text-[#1C1917]/50">
            Display Name
          </label>
          <input
            id="displayName"
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="w-full h-12 px-4 bg-white border-2 border-[#1C1917]/20 focus:border-[#E9A319] outline-none transition-all sketchy-border font-bold text-[#1C1917]"
            placeholder="Your name"
          />
        </div>

        {/* Username */}
        <div className="space-y-2">
          <label htmlFor="username" className="text-[11px] font-black uppercase tracking-widest text-[#1C1917]/50">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full h-12 px-4 bg-white border-2 border-[#1C1917]/20 focus:border-[#E9A319] outline-none transition-all sketchy-border font-bold text-[#1C1917]"
            placeholder="username"
          />
        </div>

        {/* Website */}
        <div className="space-y-2 md:col-span-2">
          <label htmlFor="website" className="text-[11px] font-black uppercase tracking-widest text-[#1C1917]/50">
            Website
          </label>
          <input
            id="website"
            type="url"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className="w-full h-12 px-4 bg-white border-2 border-[#1C1917]/20 focus:border-[#E9A319] outline-none transition-all sketchy-border font-bold text-[#1C1917]"
            placeholder="https://example.com"
          />
        </div>

        {/* Bio */}
        <div className="space-y-2 md:col-span-2">
          <label htmlFor="bio" className="text-[11px] font-black uppercase tracking-widest text-[#1C1917]/50">
            Biography
          </label>
          <textarea
            id="bio"
            rows={4}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full p-4 bg-white border-2 border-[#1C1917]/20 focus:border-[#E9A319] outline-none transition-all sketchy-border font-medium text-[#1C1917] resize-none"
            placeholder="Tell us about yourself..."
          />
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 pt-4">
        <button
          onClick={updateProfile}
          disabled={loading}
          className="h-12 px-8 bg-[#E9A319] text-[#1C1917] font-black border-2 border-[#1C1917] shadow-[4px_4px_0_rgba(28,25,23,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all sketchy-border disabled:opacity-50"
        >
          {loading ? "Updating..." : "Save Changes"}
        </button>

        {success && (
          <p className="text-sm font-black text-green-600 animate-fade-in">
            Profile updated successfully!
          </p>
        )}
        {error && (
          <p className="text-sm font-black text-red-600 animate-fade-in">
            {error}
          </p>
        )}
      </div>
    </div>
  );
}
