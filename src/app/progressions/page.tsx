// Progressions page for the Serenity Strings website.

import ProgressionGenerator from "@/components/ui/ProgressionGenerator";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Progressions',
};

const ProgressionsPage = () =>
  {
    return (
      <main>
        <ProgressionGenerator />
      </main>
    );
  }  

export default ProgressionsPage