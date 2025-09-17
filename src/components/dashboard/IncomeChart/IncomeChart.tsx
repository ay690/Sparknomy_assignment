import React from 'react';
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer} from 'recharts';
import { useAppSelector } from '../../../hooks/redux';
import { Card, CardContent } from '../../common/Card/Card';

export const IncomeChart: React.FC = () => {
  const { incomeData } = useAppSelector(state => state.dashboard);

  // Calculate month-over-month growth
  const dataWithGrowth = incomeData.map((item, index) => {
    const previousIncome = index > 0 ? incomeData[index - 1].income : item.income;
    const momGrowth = index > 0 ? ((item.income - previousIncome) / previousIncome) * 100 : 0;
    
    return {
      ...item,
      momGrowth: Math.round(momGrowth * 10) / 10 
    };
  });

  const CustomLegend = () => {
    return (
      <div className="flex justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-4 h-3 bg-[#9747ff] rounded-sm"></div>
          <span className="text-xs text-[#9747ff]">Income</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-3 bg-[#800E13] rounded-sm"></div>
          <span className="text-xs text-[#800E13]">MoM Growth</span>
        </div>
      </div>
    );
  };

  return (
    <Card className="w-full bg-white-neutral rounded-2xl border-2 border-solid border-[#f2f2f2]">
      <CardContent className="flex items-center gap-1 px-3 py-4">
        <div className="flex w-[334px] items-start gap-6">
          <div className="flex flex-col w-[334px] gap-1 items-start">
            <div className="text-grey-text-colour-for-brand text-sm font-medium">
              Income Trend
            </div>

            <div className="flex flex-col items-start gap-1 w-full">
              <div className="text-grey-text-colour-for-brand text-sm max-w-[299px]">
                Your monthly income and growth for the last 6 months.
              </div>

              <div className="flex gap-3.5 px-3 py-0 w-full bg-white-neutral rounded-xl flex-col items-center">
                <div className="w-sm h-[314px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                      data={dataWithGrowth}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 60,
                      }}
                    >
                      <defs>
                        <linearGradient id="barGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#800E13" />
                          <stop offset="50%" stopColor="#800E13" />
                          <stop offset="100%" stopColor="#800E13" />
                        </linearGradient>
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#800E13" />
                          <stop offset="50%" stopColor="#800E13" />
                          <stop offset="100%" stopColor="#800E13" />
                        </linearGradient>
                      </defs>
                      
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      
                      <XAxis 
                        dataKey="month" 
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fill: '#999' }}
                      />
                      
                      {/* Left Y-axis for Income */}
                      <YAxis 
                        yAxisId="income"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fill: '#999' }}
                        tickFormatter={(value) => `$${value / 1000}k`}
                      />
                      
                      {/* Right Y-axis for Growth */}
                      <YAxis 
                        yAxisId="growth"
                        orientation="right"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fill: '#999' }}
                        tickFormatter={(value) => `${value}%`}
                      />
                      
                      <Bar 
                        yAxisId="income"
                        dataKey="income" 
                        fill="#9747ff"
                        radius={[4, 4, 0, 0]}
                        maxBarSize={40}
                      />
                      
                      <Line 
                        yAxisId="growth"
                        type="monotone" 
                        dataKey="momGrowth" 
                        stroke="url(#lineGradient)"
                        strokeWidth={3}
                        dot={{ fill: '#8147af', strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 6, fill: '#800E13' }}
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
                
                <CustomLegend />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};