import React from 'react'
import Link from "next/link";


function Copyright() {
  return (
    <div><div className="pt-12 bg-[#EEE9E2] text-center">
                        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[16px] font-medium mb-4">
                            <Link href="#" className="underline underline-offset-2">Privacy & Cookies Policy</Link>
                            <Link href="#" className="underline underline-offset-2">Good Faith Estimate</Link>
                            <Link href="#" className="underline underline-offset-2">Website Terms & Conditions</Link>
                            <Link href="#" className="underline underline-offset-2">Disclaimer</Link>
                        </div>

                        <p className="text-[16px] mb-8">
                            Website Credits:
                            <a
                                href="https://soham-1910.vercel.app/"
                                className="underline underline-offset-2 cursor-pointer pl-1 font-normal"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Soham Gurav
                            </a>
                        </p>

                        <p className="text-[16px] font-normal pb-6">
                            All Rights Reserved © 2024 Grow My Therapy, LLC.
                        </p>
                    </div></div>
  )
}

export default Copyright