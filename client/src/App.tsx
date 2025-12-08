import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Following from "@/pages/following";
import QuestionsPage from "@/pages/questionspage";
import NotificationsPage from "@/pages/notificationspage";
import MessagesPage from "@/pages/messages";
import CreateAdPage from "@/pages/createadd";
import MonetizationPage from "@/pages/monetization";
import SubscriptionPage from "@/pages/subscription";
import UPIPaymentPage from "@/pages/upi-payment";
import CardPaymentPage from "@/pages/card-payment";
import TrialConfirmationPage from "@/pages/trial-confirmation";
import BookmarksPage from "@/pages/bookmarks";
import DraftsPage from "@/pages/draft"
import AnswerRequestsPage from "@/pages/answer-requests"
import ThemeSettingModal from "@/pages/darkmode"
import SettingsPage from "@/pages/settings"
import LanguagesPage from "@/pages/languages"
import HelpPage from "@/pages/help"
import ProfilePage from "@/pages/profile"
import AboutPage from "@/pages/about"
import TermsPage from "@/pages/terms"
import PrivacyPage from "@/pages/privacy"
import AcceptableUsePage from "@/pages/acceptable-use"
import AdvertisePage from "@/pages/advertise"
import CareersPage from "@/pages/careers"
import PressPage from "@/pages/press"
import CompanyPage from "@/pages/company"
import GrievancePage from "@/pages/grievance"
import TopicsPage from "@/pages/topics"
import TopicsCategoryPage from "@/pages/topics-category"
import TopicsCreatePage from "@/pages/topics-create"
import TopicsFollowingPage from "@/pages/topics-following"

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/following" component={Following} />
      <Route path="/answer" component={QuestionsPage} />
      <Route path="/notifications" component={NotificationsPage} />
      <Route path="/messages" component={MessagesPage} />
      <Route path="/create-ad" component={CreateAdPage} />
      <Route path="/monetization" component={MonetizationPage} />
      <Route path="/subscription" component={SubscriptionPage} />
      <Route path="/upi-payment" component={UPIPaymentPage} />
      <Route path="/card-payment" component={CardPaymentPage} />
      <Route path="/trial-confirmation" component={TrialConfirmationPage} />
      <Route path="/bookmarks" component={BookmarksPage} />
      <Route path="/drafts" component={DraftsPage} />
      <Route path="/answer-requests" component={AnswerRequestsPage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/darkmode" component={ThemeSettingModal} />
      <Route path="/settings" component={SettingsPage} />
      <Route path="/languages" component={LanguagesPage} />
      <Route path="/help" component={HelpPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/terms" component={TermsPage} />
      <Route path="/privacy" component={PrivacyPage} />
      <Route path="/acceptable-use" component={AcceptableUsePage} />
      <Route path="/advertise" component={AdvertisePage} />
      <Route path="/careers" component={CareersPage} />
      <Route path="/press" component={PressPage} />
      <Route path="/company" component={CompanyPage} />
      <Route path="/grievance" component={GrievancePage} />
      <Route path="/topics" component={TopicsPage} />
      <Route path="/topics/category/:category" component={TopicsCategoryPage} />
      <Route path="/topics/create" component={TopicsCreatePage} />
      <Route path="/topics/following" component={TopicsFollowingPage} />
      
      {/* Fallback for all other routes to Home during mockup, or 404 if preferred */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Router />
          <Toaster />
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;