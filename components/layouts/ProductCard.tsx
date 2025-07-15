import React from 'react'
import { Card, CardFooter, CardTitle } from '../ui/card'
import Image from 'next/image'

export default function ProductCard() {
  return (
    <>
        <Card  className="w-72 pt-0 rounded-none m-auto">
            <Image
              src={"/images/image3.png"}
              width={285}
              height={301}
              alt="card image"
              className="m-auto"
            />
            <CardFooter className="block">
              <CardTitle className="text-2xl font-semibold">
                Syltherine
              </CardTitle>
              <p className="text-base font-medium">Stylish cafe chair</p>
              <h4 className="text-xl font-semibold">
                Rp 2.500.000{" "}
                <del className="text-base font-normal">Rp 3.500.000</del>
              </h4>
            </CardFooter>
          </Card>
    </>
  )
}
