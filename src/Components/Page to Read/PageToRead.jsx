import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area } from 'recharts';

export default function PageToRead() {
  // Call useLoaderData to get the loaded data
  const data = useLoaderData();

  return (
    <div >
      <AreaChart width={730} height={250} data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorRating" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="bookName" stroke="#cccccc" />
        <YAxis stroke="#cccccc" />
        <CartesianGrid strokeDasharray="3 3" stroke="#444444" />
        <Tooltip contentStyle={{ backgroundColor: '#333333', borderColor: '#8884d8' }} />
        <Area type="monotone" dataKey="rating" stroke="#8884d8" fillOpacity={1} fill="url(#colorRating)" />
      </AreaChart>
    </div>
  );
}
