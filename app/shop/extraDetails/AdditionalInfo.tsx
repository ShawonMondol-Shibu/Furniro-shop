"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Truck, Shield, Award, Ruler, Palette } from "lucide-react"

export default function SofaInfoTabs() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Modern Comfort Sectional Sofa</h1>
        <p className="text-muted-foreground">Premium 3-seater sofa with chaise lounge</p>
        <div className="flex items-center gap-4 mt-4">
          <span className="text-2xl font-bold">$1,299.99</span>
          <Badge variant="secondary">Free Shipping</Badge>
          <Badge variant="outline">In Stock</Badge>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full lg:grid-cols-5 grid-cols-2 gap-2 mb-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="specifications">Specifications</TabsTrigger>
          <TabsTrigger value="materials">Materials & Care</TabsTrigger>
          <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
          <TabsTrigger value="warranty">Warranty</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                Product Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Description</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Experience ultimate comfort with our Modern Comfort Sectional Sofa. This contemporary piece features a
                  spacious 3-seater design with an attached chaise lounge, perfect for relaxing or entertaining guests.
                  The sofa combines style and functionality with its clean lines, plush cushioning, and durable
                  construction.
                </p>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold mb-3">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-sm">High-density foam cushioning for lasting comfort</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-sm">Reversible chaise lounge configuration</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-sm">Solid hardwood frame construction</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-sm">Removable and washable cushion covers</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-sm">No-sag spring suspension system</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span className="text-sm">Contemporary design fits any decor</span>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold mb-3">Available Colors</h3>
                <div className="flex gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gray-600 rounded-full border-2 border-gray-300"></div>
                    <span className="text-sm">Charcoal Gray</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-900 rounded-full border-2 border-gray-300"></div>
                    <span className="text-sm">Navy Blue</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-amber-100 rounded-full border-2 border-gray-300"></div>
                    <span className="text-sm">Cream</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-amber-800 rounded-full border-2 border-gray-300"></div>
                    <span className="text-sm">Cognac Brown</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="specifications" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Ruler className="w-5 h-5" />
                Specifications & Dimensions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Overall Dimensions</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Width:</span>
                      <span>102" (259 cm)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Depth:</span>
                      <span>65" (165 cm)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Height:</span>
                      <span>35" (89 cm)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Weight:</span>
                      <span>185 lbs (84 kg)</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Seating Dimensions</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Seat Width:</span>
                      <span>72" (183 cm)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Seat Depth:</span>
                      <span>24" (61 cm)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Seat Height:</span>
                      <span>18" (46 cm)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Arm Height:</span>
                      <span>26" (66 cm)</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Chaise Dimensions</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Chaise Width:</span>
                      <span>30" (76 cm)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Chaise Length:</span>
                      <span>65" (165 cm)</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Technical Specs</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Assembly Required:</span>
                      <span>Minimal</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Max Weight Capacity:</span>
                      <span>750 lbs</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Leg Material:</span>
                      <span>Solid Wood</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Leg Finish:</span>
                      <span>Espresso</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="materials" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="w-5 h-5" />
                Materials & Care Instructions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Materials</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Frame</h4>
                    <p className="text-sm text-muted-foreground">
                      Kiln-dried hardwood frame with reinforced joints and corner blocks for maximum durability
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Cushioning</h4>
                    <p className="text-sm text-muted-foreground">
                      High-density polyurethane foam wrapped in polyester fiber batting
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Suspension</h4>
                    <p className="text-sm text-muted-foreground">
                      8-way hand-tied springs for superior support and longevity
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Upholstery</h4>
                    <p className="text-sm text-muted-foreground">
                      100% polyester fabric with stain-resistant treatment
                    </p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold mb-3">Care Instructions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm mb-2">Regular Maintenance</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Vacuum regularly using upholstery attachment</li>
                      <li>• Rotate and flip cushions weekly for even wear</li>
                      <li>• Keep away from direct sunlight to prevent fading</li>
                      <li>• Maintain room humidity between 30-50%</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm mb-2">Cleaning</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Spot clean spills immediately with clean cloth</li>
                      <li>• Use mild soap and water for stain removal</li>
                      <li>• Cushion covers are removable and machine washable (cold water, gentle cycle)</li>
                      <li>• Professional cleaning recommended annually</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm mb-2">Storage</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Store in dry, well-ventilated area if not in use</li>
                      <li>• Cover with breathable furniture cover</li>
                      <li>• Avoid plastic covers which can trap moisture</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="shipping" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="w-5 h-5" />
                Shipping & Returns
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Shipping Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Standard Delivery</h4>
                    <p className="text-sm text-muted-foreground">Free shipping on orders over $999</p>
                    <p className="text-sm text-muted-foreground">Delivery time: 2-4 weeks</p>
                    <p className="text-sm text-muted-foreground">Curbside delivery included</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">White Glove Delivery</h4>
                    <p className="text-sm text-muted-foreground">Additional $149</p>
                    <p className="text-sm text-muted-foreground">Inside delivery and setup</p>
                    <p className="text-sm text-muted-foreground">Packaging removal included</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold mb-3">Delivery Process</h3>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Order Confirmation</h4>
                      <p className="text-sm text-muted-foreground">
                        You'll receive an order confirmation within 24 hours
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Production & Quality Check</h4>
                      <p className="text-sm text-muted-foreground">Your sofa is crafted and inspected (1-3 weeks)</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Delivery Scheduling</h4>
                      <p className="text-sm text-muted-foreground">We'll contact you to schedule delivery</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Delivery</h4>
                      <p className="text-sm text-muted-foreground">Professional delivery team brings your sofa home</p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold mb-3">Returns & Exchanges</h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Return Period:</strong> 30 days from delivery date
                  </p>
                  <p>
                    <strong>Condition:</strong> Item must be in original condition with tags
                  </p>
                  <p>
                    <strong>Return Shipping:</strong> Customer responsible for return shipping costs
                  </p>
                  <p>
                    <strong>Refund Processing:</strong> 5-7 business days after we receive the item
                  </p>
                  <p>
                    <strong>Exchanges:</strong> Available for different colors or sizes (subject to availability)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="warranty" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Warranty & Protection
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Manufacturer Warranty</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Frame Warranty</h4>
                    <p className="text-sm text-muted-foreground">Lifetime warranty on frame construction</p>
                    <p className="text-sm text-muted-foreground">Covers structural defects and joint failures</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Spring System</h4>
                    <p className="text-sm text-muted-foreground">10-year warranty on spring suspension</p>
                    <p className="text-sm text-muted-foreground">Covers sagging and spring breakage</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Cushions</h4>
                    <p className="text-sm text-muted-foreground">5-year warranty on foam cushioning</p>
                    <p className="text-sm text-muted-foreground">Covers excessive softening or compression</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Fabric</h4>
                    <p className="text-sm text-muted-foreground">2-year warranty on upholstery fabric</p>
                    <p className="text-sm text-muted-foreground">Covers manufacturing defects and premature wear</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold mb-3">What's Covered</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-sm mb-2 text-green-600">✓ Covered</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Manufacturing defects</li>
                      <li>• Structural frame issues</li>
                      <li>• Spring system failures</li>
                      <li>• Premature cushion compression</li>
                      <li>• Fabric defects (pilling, tearing)</li>
                      <li>• Hardware failures</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-2 text-red-600">✗ Not Covered</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Normal wear and tear</li>
                      <li>• Damage from misuse or abuse</li>
                      <li>• Stains and spills</li>
                      <li>• Pet damage</li>
                      <li>• Fading from sunlight</li>
                      <li>• Damage during moving</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold mb-3">Extended Protection Plans</h3>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-sm">3-Year Protection Plan</h4>
                      <span className="text-sm font-semibold">$199</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Covers accidental stains, rips, and structural damage
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Unlimited claims</li>
                      <li>• Professional cleaning included</li>
                      <li>• Repair or replacement coverage</li>
                    </ul>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-sm">5-Year Protection Plan</h4>
                      <span className="text-sm font-semibold">$299</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Complete coverage including pet damage and moving protection
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Everything in 3-year plan</li>
                      <li>• Pet damage coverage</li>
                      <li>• Moving damage protection</li>
                      <li>• Annual professional cleaning</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
