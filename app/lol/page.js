import React from "react";

const page = () => {
  return (
    <div className="bg-green-400 w-full h-full mt-20">
      <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700 w-full bg-red-300">
        <li className="pb-3 sm:pb-4 w-full">
          <div className="flex items-center space-x-4 w-full">
            <div className="flex-shrink-0">
              <img
                className="w-8 h-8 rounded-full"
                src="/docs/images/people/profile-picture-1.jpg"
                alt="Neil image"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                Neil Sims
              </p>
              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                Oh, my god. Read the whole event log. If you were behind
                Cloudflare and it was proxying sensitive data (the contents of
                HTTP POSTs, &c), they've potentially been spraying it into
                caches all across the Internet; it was so bad that Tavis found
                it by accident just looking through Google search results. The
                crazy thing here is that the Project Zero people were joking
                last night about a disclosure that was going to keep everyone at
                work late today. And, this morning, Google announced the SHA-1
                collision, which everyone (including the insiders who leaked
                that the SHA-1 collision was coming) thought was the big
                announcement. Nope. A SHA-1 collision, it turns out, is the
                minor security news of the day. This is approximately as bad as
                it ever gets. A significant number of companies probably need to
                compose customer notifications; it's, at this point, very
                difficult to rule out unauthorized disclosure of anything that
                traversed Cloudflare.
              </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              $320
            </div>
          </div>
        </li>
        <li className="py-3 sm:py-4">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <img
                className="w-8 h-8 rounded-full"
                src="/docs/images/people/profile-picture-3.jpg"
                alt="Neil image"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                Bonnie Green
              </p>
              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                email@flowbite.com
              </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              $3467
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default page;
