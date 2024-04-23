"use client";

import { motion } from "framer-motion";
import {
  RocketLaunchIcon,
  EnvelopeIcon,
  MegaphoneIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  BellAlertIcon,
} from "@heroicons/react/24/solid";
import { formatDate } from "date-fns";

export default function Home() {
  return (
    <div className="bg-neutral-950 pb-20">
      <div className="h-screen w-full relative flex flex-col items-center justify-center ">
        <div className="max-w-4xl mx-auto p-4">
          <h1 className="relative z-10 text-neutral-100 text-lg md:text-6xl md:leading-[4.5rem]    text-center font-sans font-bold">
            Open source sending infrastructure for{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r  from-[#06b6d4] to-[#10b981]">
              developers
            </span>
          </h1>
          <p></p>
          <p className="text-neutral-100 text-lg max-w-lg mx-auto my-4 text-center relative z-10">
            Send transactional, marketing emails, SMSes and push notifications
            effortlessly.
          </p>
          <div className="flex justify-center mt-16">
            <motion.a
              className="bg-white text-black py-2 px-6 rounded-full cursor-pointer flex gap-2"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              href="https://app.youform.io/forms/caja89vr"
              target="_blank"
            >
              <RocketLaunchIcon className="h-6 w-6" />
              Join the waitlist
            </motion.a>
          </div>
        </div>

        {/* <BackgroundBeams /> */}
      </div>
      <div className=" max-w-5xl mx-auto flex flex-col gap-40">
        <div>
          <p className="text-center text-6xl ">Reach your users</p>
        </div>
        <div className="flex">
          <div className="w-1/2">
            <div className="flex flex-col gap-2">
              <EnvelopeIcon className="h-10 w-10 text-fuchsia-500" />
              <p className="text-3xl font-semibold">Transactional Mail</p>
            </div>
            <ul className="flex flex-col gap-4 mt-8">
              <li>Simple to use! No wasted time on configuration.</li>
              <li>Send emails that reach the inbox, not spam.</li>
              <li>Get notified of email bounces and complaints.</li>
            </ul>
          </div>
          <div className="w-1/2 flex flex-col  border rounded-lg p-8">
            <div className=" border-l border-dashed flex flex-col gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  damping: 15,
                  stiffness: 100,
                  type: "spring",
                }}
                viewport={{ once: true }}
                className="flex flex-col gap-4"
              >
                <div className="flex gap-5 items-start">
                  <div className=" -ml-2.5">
                    <div
                      className={`flex justify-center items-center p-1.5 bg-gray-600/50 rounded-full`}
                    >
                      <div className={`h-2 w-2 rounded-full bg-gray-600`}></div>
                    </div>
                  </div>
                  <div className="-mt-1">
                    <div className=" capitalize font-medium">
                      <div
                        className={` text-center w-[130px] rounded capitalize py-1 text-xs bg-gray-400/10 text-gray-400 border-gray-400/10`}
                      >
                        Sent
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground mt-2">
                      {formatDate(Date.now() - 100000, "MMM dd, hh:mm a")}
                    </div>
                    <div className="mt-1 text-primary/80">
                      We received your request and sent the email to recipient's
                      server.
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  damping: 15,
                  stiffness: 100,
                  type: "spring",
                  delay: 0.3,
                }}
                viewport={{ once: true }}
              >
                <div className="flex gap-5 items-start">
                  <div className=" -ml-2.5">
                    <div
                      className={`flex justify-center items-center p-1.5 bg-emerald-500/50 rounded-full`}
                    >
                      <div
                        className={`h-2 w-2 rounded-full bg-emerald-500`}
                      ></div>
                    </div>
                  </div>
                  <div className="-mt-1">
                    <div className=" capitalize font-medium">
                      <div
                        className={` text-center w-[130px] rounded capitalize py-1 text-xs bg-emerald-500/10 text-emerald-500 border-emerald-600/10`}
                      >
                        Delivered
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground mt-2">
                      {formatDate(new Date(), "MMM dd, hh:mm a")}
                    </div>
                    <div className="mt-1 text-primary/80">
                      Mail is successfully delivered to the recipient.
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/2">
            <div className="flex flex-col gap-2">
              <MegaphoneIcon className="h-10 w-10 text-indigo-500" />
              <p className="text-3xl font-semibold">Marketing Mail</p>
            </div>
            <ul className="flex flex-col gap-4 mt-8">
              <li>Manage newsletters, changelogs, and broadcasts easily.</li>
              <li>Use our no-code email builder and templates.</li>
              <li>Measure engagement using click and open tracking.</li>
              <li>We will manage subscriptions for you.</li>
            </ul>
          </div>
          <div className="w-1/2"></div>
        </div>
        <div className="flex">
          <div className="w-1/2">
            <div className="flex flex-col gap-2">
              <ChatBubbleOvalLeftEllipsisIcon className="h-10 w-10 text-emerald-500" />
              <div className="flex gap-4 items-center">
                <p className="text-3xl font-semibold">SMS</p>
                <div className="rounded-md border px-2 py-1 text-xs bg-neutral-900">
                  Coming soon
                </div>
              </div>
            </div>
            <ul className="flex flex-col gap-4 mt-8">
              <li>Manage newsletters, changelogs, and broadcasts easily.</li>
              <li>Use our no-code email builder and templates.</li>
              <li>Measure engagement using click and open tracking.</li>
              <li>We will manage subscriptions for you.</li>
            </ul>
          </div>
          <div className="w-1/2"></div>
        </div>
        <div className="flex">
          <div className="w-1/2">
            <div className="flex flex-col gap-2">
              <BellAlertIcon className="h-10 w-10 text-cyan-500" />
              <div className="flex gap-4 items-center">
                <p className="text-3xl font-semibold">Push notification</p>
                <div className="rounded-md border px-2 py-1 text-xs bg-neutral-900">
                  Coming soon
                </div>
              </div>
            </div>
            <ul className="flex flex-col gap-4 mt-8">
              <li>Manage newsletters, changelogs, and broadcasts easily.</li>
              <li>Use our no-code email builder and templates.</li>
              <li>Measure engagement using click and open tracking.</li>
              <li>We will manage subscriptions for you.</li>
            </ul>
          </div>
          <div className="w-1/2"></div>
        </div>
      </div>
      <div className="">
        <div className="flex justify-center mt-40">
          <motion.a
            className="bg-white text-black py-2 px-6 rounded-full cursor-pointer flex gap-2"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            href="https://app.youform.io/forms/caja89vr"
            target="_blank"
          >
            <RocketLaunchIcon className="h-6 w-6" />
            Join the waitlist
          </motion.a>
        </div>
      </div>
    </div>
  );
}
