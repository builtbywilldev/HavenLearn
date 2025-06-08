import CompanionsList from "@/components/CompanionsList";
import { recentSessions } from "@/constants";
import Image from "next/image";
import { currentUser } from "@clerk/nextjs/server";

const Profile = async () => {
  const user = await currentUser();

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="rounded-xl border bg-white p-6 shadow-sm mb-10">
        <section className="flex justify-between gap-4 flex-wrap items-center">
          <div className="flex gap-4 items-center">
            <Image
              src={user?.imageUrl || "/icons/user.svg"}
              alt={user?.firstName || ""}
              width={80}
              height={80}
              className="rounded-full"
            />
            <div className="flex flex-col gap-1">
              <h1 className="font-bold text-2xl">
                {user?.firstName || "Guest"} {user?.lastName || ""}
              </h1>
              <p className="text-sm text-muted-foreground">
                {user?.emailAddresses?.[0]?.emailAddress || "guest@example.com"}
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="border border-black rounded-lg p-3 gap-2 flex flex-col h-fit text-center shadow-sm min-w-[150px] items-center">
              <Image
                src="/icons/check.svg"
                alt="check"
                width={22}
                height={22}
              />
              <div className="text-xl font-semibold">Lessons Completed</div>
              <div className="text-sm text-muted-foreground">
                Feature not yet implemented
              </div>
            </div>
            <div className="border border-black rounded-lg p-3 gap-2 flex flex-col h-fit text-center shadow-sm min-w-[150px] items-center">
              <Image src="/icons/cap.svg" alt="cap" width={22} height={22} />
              <div className="text-xl font-semibold">Companions Created</div>
              <div className="text-sm text-muted-foreground">
                Feature not yet implemented
              </div>
            </div>
          </div>
        </section>
      </div>

      <CompanionsList
        title="Recently Completed Sessions"
        companions={recentSessions}
        classNames="w-full"
      />
    </div>
  );
};

export default Profile;
