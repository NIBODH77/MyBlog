import { Link } from "wouter";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TranslatedText } from "@/hooks/useTranslation";

export default function TrialConfirmationPage() {
  return (
    <div className="min-h-screen bg-[#F1F2F2] dark:bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader className="pb-2">
          <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <CardTitle className="text-2xl">
            <TranslatedText>Trial Started!</TranslatedText>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            <TranslatedText>
              Your 7-day free trial of MyBlog+ has been activated. Enjoy all premium features!
            </TranslatedText>
          </p>
          
          <div className="bg-secondary/30 rounded-lg p-4 text-sm text-left space-y-2">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span><TranslatedText>Ad-free browsing</TranslatedText></span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span><TranslatedText>Exclusive content access</TranslatedText></span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span><TranslatedText>Priority support</TranslatedText></span>
            </div>
          </div>
          
          <Link href="/">
            <Button className="w-full bg-[#b92b27] hover:bg-[#a32420] text-white gap-2">
              <TranslatedText>Start Exploring</TranslatedText>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
