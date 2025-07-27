"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ThumbsUp } from "lucide-react"

interface Review {
  id: string
  customerName: string
  avatar?: string
  rating: number
  date: string
  title: string
  content: string
  verified: boolean
  helpful: number
  productVariant?: string
}

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
        />
      ))}
    </div>
  )
}

const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <Card className="mb-4">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="w-10 h-10">
              <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.customerName} />
              <AvatarFallback>
                {review.customerName
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-semibold text-sm">{review.customerName}</h4>
                {review.verified && (
                  <Badge variant="secondary" className="text-xs">
                    Verified Purchase
                  </Badge>
                )}
              </div>
              <div className="flex items-center gap-2 mt-1">
                <StarRating rating={review.rating} />
                <span className="text-sm text-muted-foreground">{review.date}</span>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <h5 className="font-medium mb-2">{review.title}</h5>
        {review.productVariant && (
          <p className="text-sm text-muted-foreground mb-2">
            <strong>Variant:</strong> {review.productVariant}
          </p>
        )}
        <p className="text-sm text-muted-foreground leading-relaxed mb-3">{review.content}</p>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <ThumbsUp className="w-4 h-4" />
          <span>{review.helpful} people found this helpful</span>
        </div>
      </CardContent>
    </Card>
  )
}

export default function Reviews() {
  const allReviews: Review[] = [
    // Sofa Reviews
    {
      id: "1",
      customerName: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40&text=SJ",
      rating: 5,
      date: "2 weeks ago",
      title: "Absolutely love this sofa!",
      content:
        "The quality is outstanding and it's incredibly comfortable. The fabric feels premium and the color matches perfectly with my living room decor. Assembly was straightforward and the delivery team was professional. Highly recommend!",
      verified: true,
      helpful: 12,
      productVariant: "Charcoal Gray, 3-Seater Sofa",
    },
    {
      id: "2",
      customerName: "Mike Chen",
      avatar: "/placeholder.svg?height=40&width=40&text=MC",
      rating: 4,
      date: "1 month ago",
      title: "Great value for money",
      content:
        "Solid construction and comfortable seating. The only minor issue is that the cushions are a bit firmer than expected, but they're breaking in nicely. The design is modern and fits well in our apartment.",
      verified: true,
      helpful: 8,
      productVariant: "Navy Blue, 2-Seater Sofa",
    },
    {
      id: "3",
      customerName: "Emily Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40&text=ER",
      rating: 5,
      date: "3 weeks ago",
      title: "Perfect for small spaces",
      content:
        "This sofa is exactly what I needed for my studio apartment. It's compact but doesn't feel cramped when you sit on it. The storage compartment underneath is a bonus! Quality materials and excellent craftsmanship.",
      verified: true,
      helpful: 15,
      productVariant: "Beige Loveseat",
    },
    // Chair Reviews
    {
      id: "4",
      customerName: "David Thompson",
      avatar: "/placeholder.svg?height=40&width=40&text=DT",
      rating: 5,
      date: "1 week ago",
      title: "Best office chair I've owned",
      content:
        "After working from home for 2 years, I finally invested in a proper chair. The ergonomic support is fantastic - no more back pain after long work sessions. The adjustability options are comprehensive and the build quality is top-notch.",
      verified: true,
      helpful: 23,
      productVariant: "Black Leather Office Chair",
    },
    {
      id: "5",
      customerName: "Lisa Park",
      avatar: "/placeholder.svg?height=40&width=40&text=LP",
      rating: 4,
      date: "2 weeks ago",
      title: "Stylish and comfortable",
      content:
        "Beautiful accent chair that adds character to my reading nook. The velvet upholstery is luxurious and the color is rich. Assembly took about 30 minutes. Only wish the seat was slightly deeper.",
      verified: true,
      helpful: 9,
      productVariant: "Emerald Green Velvet Accent Chair",
    },
    {
      id: "6",
      customerName: "James Wilson",
      avatar: "/placeholder.svg?height=40&width=40&text=JW",
      rating: 5,
      date: "4 days ago",
      title: "Exceeded expectations",
      content:
        "Bought this for my dining room and it's perfect. The wooden frame is solid and the cushioning strikes the right balance between firm and comfortable. Great attention to detail in the stitching and finish.",
      verified: true,
      helpful: 6,
      productVariant: "Walnut Wood Dining Chair",
    },
    // Table Reviews
    {
      id: "7",
      customerName: "Amanda Foster",
      avatar: "/placeholder.svg?height=40&width=40&text=AF",
      rating: 5,
      date: "5 days ago",
      title: "Stunning centerpiece",
      content:
        "This dining table is absolutely gorgeous! The live edge wood is beautiful and each piece is unique. It's become the focal point of our dining room. The craftsmanship is evident in every detail. Worth every penny.",
      verified: true,
      helpful: 18,
      productVariant: "Live Edge Oak Dining Table",
    },
    {
      id: "8",
      customerName: "Robert Kim",
      avatar: "/placeholder.svg?height=40&width=40&text=RK",
      rating: 4,
      date: "1 month ago",
      title: "Solid and functional",
      content:
        "Great table for everyday use. The surface is durable and easy to clean. The extension mechanism works smoothly when we need extra space for guests. Good value for a solid wood table.",
      verified: true,
      helpful: 11,
      productVariant: "Mahogany Extendable Table",
    },
    {
      id: "9",
      customerName: "Jennifer Lee",
      avatar: "/placeholder.svg?height=40&width=40&text=JL",
      rating: 5,
      date: "2 weeks ago",
      title: "Perfect for small dining area",
      content:
        "Exactly what I needed for my apartment. The round shape saves space and the pedestal base means no one hits their legs on table legs. The finish is smooth and the color matches my other furniture perfectly.",
      verified: true,
      helpful: 7,
      productVariant: "White Oak Round Coffee Table",
    },
    // Additional reviews for more variety
    {
      id: "10",
      customerName: "Maria Gonzalez",
      avatar: "/placeholder.svg?height=40&width=40&text=MG",
      rating: 5,
      date: "3 days ago",
      title: "Beautiful bedroom set",
      content:
        "The entire bedroom collection is stunning. The bed frame is solid and the nightstands match perfectly. The drawers slide smoothly and there's plenty of storage space. The finish is consistent across all pieces.",
      verified: true,
      helpful: 14,
      productVariant: "Rustic Pine Bedroom Set",
    },
    {
      id: "11",
      customerName: "Kevin O'Brien",
      avatar: "/placeholder.svg?height=40&width=40&text=KO",
      rating: 4,
      date: "1 week ago",
      title: "Great bookshelf for the price",
      content:
        "Solid construction and looks great in my home office. Assembly was straightforward with clear instructions. The shelves are adjustable which is perfect for different book sizes. Only minor issue is some slight color variation in the wood.",
      verified: true,
      helpful: 5,
      productVariant: "5-Tier Oak Bookshelf",
    },
    {
      id: "12",
      customerName: "Rachel Adams",
      avatar: "/placeholder.svg?height=40&width=40&text=RA",
      rating: 5,
      date: "6 days ago",
      title: "Perfect ottoman for our living room",
      content:
        "This storage ottoman is exactly what we needed. It provides extra seating when guests come over and the storage inside is surprisingly spacious. The fabric is durable and easy to clean. Great quality for the price.",
      verified: true,
      helpful: 8,
      productVariant: "Gray Fabric Storage Ottoman",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Customer Reviews</h1>
        <p className="text-muted-foreground">See what our customers are saying about our furniture collection</p>
        <div className="mt-4 p-4 bg-muted/50 rounded-lg">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium">{allReviews.length} total reviews</span>
            <div className="flex items-center gap-2">
              <StarRating rating={5} />
              <span className="font-medium">4.7 average rating</span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {allReviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  )
}
