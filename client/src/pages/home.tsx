import React, { useState } from "react";
import { X, HelpCircle, PenSquare, FileText } from "lucide-react";
import MyBlogPlusModal from "@/components/MyBlogPlusModal";
import { AppShell } from "@/components/layout/AppShell";

export default function MyBlogClone() {
  const [isPlusModalOpen, setIsPlusModalOpen] = useState(false);
  const [posts] = useState([
    {
      id: 1,
      author: "Lucky Perspectives",
      verified: true,
      location: "Lived in Shimla, Himachal Pradesh, India",
      date: "Jul 24",
      content:
        "क्या आपने कभी ऐसी विधायक के बारे में सुना है? दुनिया के पहले MLA जिनके लिये में लोग अपनी मेडिकल पत्नी थमाकर कहते हैं दवाई लिख दो सर। कई बार हद तब हो जाती है जब MLA साहब कोट पट टाई और टर पर साफा पहने किसी शादी समारोह में पहुंचते हैं तो कई बीमार वहां रहे हो लोग अपने घर से अपनी मेडि...",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    },
  ]);

  return (
    <AppShell hideRightSidebar>
      <div className="flex gap-4">
        {/* Left Sidebar */}
        <div className="hidden md:block w-48 flex-shrink-0">
          <div className="sticky top-20 bg-white dark:bg-card rounded shadow-sm self-start">
            <a href="/create-space" className="w-full px-4 py-3 text-left text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-secondary/50 flex items-center gap-2 border-b dark:border-border">
              <span className="text-2xl">+</span>
              <span className="text-sm">Create Space</span>
            </a>
            <div className="p-2 text-xs text-gray-500 dark:text-muted-foreground space-y-1">
              <a href="/about" className="block py-1 hover:underline">
                About MyBlog
              </a>
              <a href="/terms" className="block py-1 hover:underline">
                Terms
              </a>
              <a href="/privacy" className="block py-1 hover:underline">
                Privacy
              </a>
              <a href="/acceptable-use" className="block py-1 hover:underline">
                Acceptable Use
              </a>
              <a href="/advertise" className="block py-1 hover:underline">
                Advertise
              </a>
              <a href="/grievance" className="block py-1 hover:underline">
                Grievance Officer
              </a>
              <a href="/careers" className="block py-1 hover:underline">
                Careers
              </a>
              <a href="/press" className="block py-1 hover:underline">
                Press
              </a>
              <a href="/ad-choices" className="block py-1 hover:underline">
                Your Ad Choices
              </a>
              <a href="#" className="block py-1 hover:underline">
                © MyBlog, Inc. 2024
              </a>
            </div>
          </div>
        </div>

        {/* Main Feed */}
        <div className="flex-1 max-w-5xl">
          {/* Post Composer */}
          <div className="bg-white dark:bg-card rounded shadow-sm mb-4 p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold">
                L
              </div>
              <input
                type="text"
                placeholder="What do you want to ask or share?"
                className="flex-1 text-gray-500 dark:text-muted-foreground text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-secondary/50 py-2 px-3 rounded border border-gray-200 dark:border-border"
              />
            </div>

            <div className="flex gap-2 mt-3 border-t pt-3 dark:border-border">
              <button className="flex items-center gap-1 text-gray-600 dark:text-gray-300 text-sm hover:bg-gray-100 dark:hover:bg-secondary/50 px-3 py-1.5 rounded">
                <HelpCircle className="w-4 h-4 text-red-600" /> Ask
              </button>
              <button className="flex items-center gap-1 text-gray-600 dark:text-gray-300 text-sm hover:bg-gray-100 dark:hover:bg-secondary/50 px-3 py-1.5 rounded">
                <PenSquare className="w-4 h-4" /> Answer
              </button>
              <button className="flex items-center gap-1 text-gray-600 dark:text-gray-300 text-sm hover:bg-gray-100 dark:hover:bg-secondary/50 px-3 py-1.5 rounded">
                <FileText className="w-4 h-4" /> Post
              </button>
            </div>
          </div>

          {/* Posts */}
          {posts.map((post) => (
            <div
              key={post.id}
              className=" bg-white dark:bg-card rounded shadow-sm mb-4"
            >
              <div className="p-4 ">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-white font-semibold">
                      L
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-900 dark:text-foreground">
                          {post.author}
                        </span>
                        <span className="text-blue-600 text-sm">· Follow</span>
                      </div>
                      <div className="text-xs text-gray-500 dark:text-muted-foreground">
                        {post.location} · {post.date}
                      </div>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:bg-gray-100 dark:hover:bg-secondary/50 p-1 rounded">
                    <X size={20} />
                  </button>
                </div>

                <p className="text-gray-900 dark:text-foreground mb-3 leading-relaxed">
                  {post.content}
                  <span className="text-gray-500 dark:text-muted-foreground ml-1 cursor-pointer hover:underline">
                    (more)
                  </span>
                </p>

                <img src={post.image} alt="Post" className="w-full rounded" />
              </div>
            </div>
          ))}
        </div>

        {/* Right Sidebar - Ads */}
        <div className=" hidden lg:block w-80 flex-shrink-0">
          <div className="sticky top-20 h-fit bg-gray-900 rounded overflow-hidden mb-4">
            <img
              src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop"
              alt="Advertisement"
              className="w-full"
            />
            <div className="p-4 text-white">
              <h3 className="text-xl font-bold mb-2">
                Save 55% on Creative Cloud Pro.
              </h3>
              <p className="text-sm mb-3">
                Now ₹1,199/mo for the first year. Ends 7 December.*
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700">
                Learn more
              </button>
            </div>
          </div>
          <div className="text-xs text-center text-gray-500 dark:text-muted-foreground">
            Advertisement
          </div>
        </div>
      </div>

      <MyBlogPlusModal
        isOpen={isPlusModalOpen}
        onClose={() => setIsPlusModalOpen(false)}
      />
    </AppShell>
  );
}
