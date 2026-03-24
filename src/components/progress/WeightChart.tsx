'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { useWeightLog } from '@/hooks/useWeightLog';

interface WeightChartProps {
  goalWeight?: number;
}

export default function WeightChart({ goalWeight }: WeightChartProps) {
  const { entries, loading } = useWeightLog();

  if (loading) return <div className="text-xs text-content-muted">Loading...</div>;
  if (entries.length === 0) return null;

  const data = entries.map((e) => ({
    date: new Date(e.log_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    weight: Number(e.weight_kg),
  }));

  return (
    <div className="bg-white border border-surface-border rounded-md p-3">
      <h4 className="text-[11px] font-bold text-content-muted uppercase tracking-wider mb-3">Weight Trend</h4>
      <ResponsiveContainer width="100%" height={180}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E0E0DC" />
          <XAxis dataKey="date" tick={{ fontSize: 10 }} stroke="#6B6B67" />
          <YAxis domain={['auto', 'auto']} tick={{ fontSize: 10 }} stroke="#6B6B67" width={35} />
          <Tooltip contentStyle={{ fontSize: 12 }} />
          <Line type="monotone" dataKey="weight" stroke="#1D9E75" strokeWidth={2} dot={{ r: 3, fill: '#1D9E75' }} />
          {goalWeight && (
            <ReferenceLine
              y={goalWeight}
              stroke="#E74C3C"
              strokeDasharray="5 5"
              label={{ value: `Goal: ${goalWeight}kg`, fontSize: 10, fill: '#E74C3C' }}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
