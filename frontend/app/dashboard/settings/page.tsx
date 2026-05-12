"use client";

import { User, Building2, Bell, Shield, LogOut } from "lucide-react";
import { useState } from "react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="max-w-5xl mx-auto pb-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-jakarta font-bold text-[#18181B]">Settings</h1>
        <p className="text-[#71717A] mt-1">Manage your account preferences and workspace details.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Navigation for Settings */}
        <div className="lg:w-64 flex-shrink-0 space-y-1">
          <button 
            onClick={() => setActiveTab("profile")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
              activeTab === "profile" ? "bg-[#18181B] text-white" : "text-[#71717A] hover:bg-zinc-100 hover:text-[#18181B]"
            }`}
          >
            <User className="w-4 h-4" /> My Profile
          </button>
          <button 
            onClick={() => setActiveTab("workspace")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
              activeTab === "workspace" ? "bg-[#18181B] text-white" : "text-[#71717A] hover:bg-zinc-100 hover:text-[#18181B]"
            }`}
          >
            <Building2 className="w-4 h-4" /> Workspace
          </button>
          <button 
            onClick={() => setActiveTab("notifications")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
              activeTab === "notifications" ? "bg-[#18181B] text-white" : "text-[#71717A] hover:bg-zinc-100 hover:text-[#18181B]"
            }`}
          >
            <Bell className="w-4 h-4" /> Notifications
          </button>
          <button 
            onClick={() => setActiveTab("security")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
              activeTab === "security" ? "bg-[#18181B] text-white" : "text-[#71717A] hover:bg-zinc-100 hover:text-[#18181B]"
            }`}
          >
            <Shield className="w-4 h-4" /> Security
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1">
          
          {/* PROFILE TAB */}
          {activeTab === "profile" && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-zinc-200">
                <h2 className="text-xl font-jakarta font-bold text-[#18181B] mb-6">Personal Information</h2>
                
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-20 h-20 bg-[#B28DFF]/10 text-[#B28DFF] rounded-full flex items-center justify-center text-2xl font-bold border border-[#B28DFF]/20">
                    MW
                  </div>
                  <div>
                    <button className="bg-white border border-zinc-200 hover:bg-zinc-50 text-[#18181B] px-4 py-2 rounded-lg text-sm font-semibold transition-colors shadow-sm">
                      Upload Avatar
                    </button>
                    <p className="text-xs text-[#71717A] mt-2">JPG, GIF or PNG. 1MB max.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#18181B]">First Name</label>
                    <input type="text" defaultValue="Mariam" className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 bg-[#FAFAFA] focus:outline-none focus:ring-2 focus:ring-[#B28DFF]/50" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#18181B]">Last Name</label>
                    <input type="text" defaultValue="Wilson" className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 bg-[#FAFAFA] focus:outline-none focus:ring-2 focus:ring-[#B28DFF]/50" />
                  </div>
                </div>

                <div className="space-y-2 mb-8">
                  <label className="text-sm font-semibold text-[#18181B]">Email Address</label>
                  <input type="email" defaultValue="mariam@wovio.io" disabled className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 bg-zinc-100 text-zinc-500 cursor-not-allowed" />
                  <p className="text-xs text-[#71717A]">To change your email, please contact support.</p>
                </div>

                <div className="flex justify-end pt-6 border-t border-zinc-100">
                  <button className="bg-[#18181B] hover:bg-zinc-800 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-colors shadow-sm">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* WORKSPACE TAB */}
          {activeTab === "workspace" && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-zinc-200">
                <h2 className="text-xl font-jakarta font-bold text-[#18181B] mb-6">Workspace Details</h2>
                
                <div className="space-y-6 mb-8">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#18181B]">Company Name</label>
                    <input type="text" defaultValue="Acme Roofing Ltd" className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 bg-[#FAFAFA] focus:outline-none focus:ring-2 focus:ring-[#80ED99]/50" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#18181B]">Primary Domain</label>
                    <input type="url" defaultValue="https://acme-solar.com" className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 bg-[#FAFAFA] focus:outline-none focus:ring-2 focus:ring-[#80ED99]/50" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#18181B]">Target Geographic Area (GEO)</label>
                    <input type="text" defaultValue="Dallas, TX" className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 bg-[#FAFAFA] focus:outline-none focus:ring-2 focus:ring-[#80ED99]/50" />
                    <p className="text-xs text-[#71717A]">This helps the AI localize your content.</p>
                  </div>
                </div>

                <div className="flex justify-end pt-6 border-t border-zinc-100">
                  <button className="bg-[#18181B] hover:bg-zinc-800 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-colors shadow-sm">
                    Update Workspace
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* NOTIFICATIONS TAB */}
          {activeTab === "notifications" && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-zinc-200">
                <h2 className="text-xl font-jakarta font-bold text-[#18181B] mb-6">Email Notifications</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-xl border border-zinc-100 hover:bg-zinc-50 transition-colors">
                    <div>
                      <p className="font-semibold text-[#18181B]">Post Published</p>
                      <p className="text-sm text-[#71717A]">Get notified when Wovio publishes an article.</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-zinc-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#B28DFF]"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl border border-zinc-100 hover:bg-zinc-50 transition-colors">
                    <div>
                      <p className="font-semibold text-[#18181B]">SEO Score Drops</p>
                      <p className="text-sm text-[#71717A]">Get alerted if your site's health needs attention.</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" value="" className="sr-only peer" />
                      <div className="w-11 h-6 bg-zinc-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#B28DFF]"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SECURITY TAB */}
          {activeTab === "security" && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-red-100">
                <h2 className="text-xl font-jakarta font-bold text-red-600 mb-2">Danger Zone</h2>
                <p className="text-sm text-[#71717A] mb-6">Irreversible actions for your account and workspace.</p>
                
                <div className="p-4 rounded-xl border border-red-200 bg-red-50 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-red-800">Delete Workspace</p>
                    <p className="text-sm text-red-600 mt-1">Permanently remove this workspace and all generated data.</p>
                  </div>
                  <button className="bg-white text-red-600 border border-red-200 hover:bg-red-600 hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors shadow-sm">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
