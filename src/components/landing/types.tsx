export interface StatisticItemProps {
    value: string;
    label: string;
    suffix?: string;
  }
  
  export interface StatisticsProps {
    title: string;
    description: string;
    statistics: StatisticItemProps[];
  }
  export interface PartnerCardProps {
    id: number;
  }
  
  export interface PartnersData {
    id: number;
  }