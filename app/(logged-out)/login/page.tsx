import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PersonStanding } from "lucide-react";
import Link from "next/link";
export default function page() {
  return (
    <>
      <PersonStanding size={50} />
      <Card className="max-w-sm w-full">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Login to your SupportMe Account</CardDescription>
        </CardHeader>
        <CardContent>Login Form</CardContent>
        <CardFooter className="justify-between">
          <small>Don&apos;t have an account</small>
          <Button variant="outline" size="sm" asChild>
            <Link href="/sign-up">Sign up</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
