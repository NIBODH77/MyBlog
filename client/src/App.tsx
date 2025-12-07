import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Following from "@/pages/following";
import QuestionsPage from "@/pages/questionspage";
import QuoraSpacesPage from "@/pages/quoraspaces";
import NotificationsPage from "@/pages/notificationspage";
import MessagesPage from "@/pages/messages";
import CreateAdPage from "@/pages/createadd";
import MonetizationPage from "@/pages/monetization";
import MyBlogPlusPage from "@/pages/plusmodel";
import BookmarksPage from "@/pages/bookmarks";
import DraftsPage from "@/pages/draft";
import ThemeSettingModal from "@/pages/darkmode";
import SettingsPage from "@/pages/settings";
import LanguagesPage from "@/pages/languages";
import HelpPage from "@/pages/help";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/following" component={Following} />
      <Route path="/answer" component={QuestionsPage} />
      <Route path="/spaces" component={QuoraSpacesPage} />
      <Route path="/notifications" component={NotificationsPage} />
      <Route path="/messages" component={MessagesPage} />
      <Route path="/create-ad" component={CreateAdPage} />
      <Route path="/monetization" component={MonetizationPage} />
      <Route path="/plus" component={MyBlogPlusPage} />
      <Route path="/bookmarks" component={BookmarksPage} />
      <Route path="/drafts" component={DraftsPage} />
      <Route path="/darkmode" component={ThemeSettingModal} />
      <Route path="/settings" component={SettingsPage} />
      <Route path="/languages" component={LanguagesPage} />
      <Route path="/help" component={HelpPage} />

      {/* Fallback for all other routes to Home during mockup, or 404 if preferred */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;