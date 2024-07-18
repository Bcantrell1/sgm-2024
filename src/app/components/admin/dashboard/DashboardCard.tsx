'use client';
import LoadingSpinner from "@/app/components/LoadingSpinner";
import Link from "next/link";

export default function DashboardCard({ title, count, link, isLoading }: { 
  title: string; 
  count: number | null; 
  link: string;
  isLoading: boolean;
}) {
  return (
    <Link href={link}>
      <div className="bg-neu-base p-6 rounded-xl h-44 flex flex-col justify-between shadow-neumorphic hover:shadow-neumorphic-inset transition-shadow duration-300">
        <h2 className="text-2xl text-center font-semibold mb-2 text-neu-green">{title}</h2>
        {isLoading ? (
          <div className="h-full flex justify-center items-center relative w-full">
            <LoadingSpinner size={64} />
          </div>
        ) : (
          <p className="text-7xl text-center font-bold text-neu-green">{count}</p>
        )}
      </div>
    </Link>
  );
}