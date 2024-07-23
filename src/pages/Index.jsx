import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-100 to-indigo-200">
      {/* Header */}
      <header className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Fancy App</h1>
          <nav>
            <Button variant="ghost" className="mr-2">Home</Button>
            <Button variant="ghost" className="mr-2">About</Button>
            <Button variant="ghost">Contact</Button>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow p-8">
        <div className="container mx-auto">
          <Card className="max-w-4xl mx-auto shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl font-extrabold text-center text-primary">Welcome to Our Fancy Application</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="features" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="pricing">Pricing</TabsTrigger>
                  <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
                </TabsList>
                <TabsContent value="features" className="mt-4">
                  <p className="text-center mb-4">Discover our amazing features that will revolutionize your workflow!</p>
                  <div className="grid grid-cols-3 gap-4">
                    {['Automation', 'Analytics', 'Integration'].map((feature) => (
                      <Card key={feature}>
                        <CardHeader>
                          <CardTitle className="text-lg">{feature}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>Experience the power of {feature.toLowerCase()} with our cutting-edge tools.</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="pricing" className="mt-4">
                  <p className="text-center mb-4">Choose the perfect plan for your needs</p>
                  <div className="grid grid-cols-3 gap-4">
                    {['Basic', 'Pro', 'Enterprise'].map((plan) => (
                      <Card key={plan}>
                        <CardHeader>
                          <CardTitle className="text-lg">{plan}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-3xl font-bold">${plan === 'Basic' ? '9.99' : plan === 'Pro' ? '19.99' : '49.99'}</p>
                          <p className="text-sm text-gray-500">per month</p>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full">Choose {plan}</Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="testimonials" className="mt-4">
                  <p className="text-center mb-4">See what our customers are saying</p>
                  <div className="space-y-4">
                    {[
                      { name: 'Alice', comment: "This app has transformed our business processes!" },
                      { name: 'Bob', comment: "I can't imagine working without it now." },
                      { name: 'Charlie', comment: "The best investment we've made in years." }
                    ].map((testimonial) => (
                      <Card key={testimonial.name}>
                        <CardContent className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-gray-500">{testimonial.comment}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex justify-center">
              <div className="w-full max-w-sm">
                <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
                <div className="flex space-x-2">
                  <Input placeholder="Enter your email" />
                  <Button>Subscribe</Button>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-md p-4 mt-8">
        <div className="container mx-auto text-center text-sm text-gray-600">
          <p>&copy; 2023 Fancy App. All rights reserved.</p>
          <p className="mt-2">
            <Button variant="link" className="p-0 h-auto font-normal">Privacy Policy</Button>
            {' | '}
            <Button variant="link" className="p-0 h-auto font-normal">Terms of Service</Button>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;