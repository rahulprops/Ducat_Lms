import React from 'react';

const AdminTable = () => {
  return (
    <div className="container p-2 mx-auto rounded-md sm:p-4 bg-slate-950 text-white">
      <h2 className="mb-3 text-2xl font-semibold leading-tight">Standings</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs">
          {/* Table Header */}
          <thead className="rounded-t-lg bg-slate-900">
            <tr className="text-right">
              <th title="Ranking" className="p-3 text-left">#</th>
              <th title="Team name" className="p-3 text-left">Team</th>
              <th title="Wins" className="p-3">W</th>
              <th title="Losses" className="p-3">L</th>
              <th title="Win percentage" className="p-3">Win%</th>
              <th title="Games behind" className="p-3">GB</th>
              <th title="Home games" className="p-3">Home</th>
              <th title="Away games" className="p-3">Away</th>
              <th title="Last 10 games" className="p-3">L10</th>
              <th title="Current streak" className="p-3">Streak</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {[
              { rank: 1, team: 'MIA', wins: 31, losses: 17, winPct: '.646', gb: 0, home: '17-5', away: '14-12', l10: '8-2', streak: 'W2' },
              { rank: 2, team: 'CHI', wins: 30, losses: 17, winPct: '.638', gb: 0.5, home: '17-6', away: '13-11', l10: '4-6', streak: 'W2' },
              { rank: 3, team: 'CLE', wins: 30, losses: 19, winPct: '.612', gb: 1.5, home: '15-9', away: '15-10', l10: '7-3', streak: 'W3' },
              { rank: 4, team: 'BKN', wins: 29, losses: 19, winPct: '.604', gb: 2, home: '12-13', away: '17-6', l10: '4-6', streak: 'L3' },
              { rank: 5, team: 'MIL', wins: 30, losses: 20, winPct: '.600', gb: 2, home: '17-8', away: '13-12', l10: '5-5', streak: 'L1' },
              { rank: 6, team: 'PHI', wins: 28, losses: 19, winPct: '.596', gb: 2.5, home: '11-10', away: '17-9', l10: '7-3', streak: 'W2' },
              { rank: 7, team: 'CHA', wins: 27, losses: 22, winPct: '.551', gb: 4.5, home: '13-7', away: '14-15', l10: '7-3', streak: 'W1' },
              { rank: 8, team: 'BOS', wins: 25, losses: 24, winPct: '.510', gb: 6.5, home: '16-10', away: '9-14', l10: '7-3', streak: 'W2' },
              { rank: 9, team: 'TOW', wins: 23, losses: 23, winPct: '.500', gb: 7, home: '13-12', away: '10-11', l10: '4-6', streak: 'L1' },
              { rank: 10, team: 'WAS', wins: 23, losses: 25, winPct: '.479', gb: 8, home: '13-12', away: '10-12', l10: '4-6', streak: 'L4' },
              { rank: 11, team: 'NYK', wins: 23, losses: 26, winPct: '.469', gb: 8.5, home: '12-14', away: '11-12', l10: '4-6', streak: 'L2' },
              { rank: 12, team: 'ATL', wins: 22, losses: 25, winPct: '.468', gb: 8.5, home: '12-11', away: '10-14', l10: '5-5', streak: 'W5' },
            ].map((row, index) => (
              <tr key={index} className="text-right border-b border-opacity-20 border-slate-700">
                <td className="px-3 py-2 text-left">{row.rank}</td>
                <td className="px-3 py-2 text-left">{row.team}</td>
                <td className="px-3 py-2">{row.wins}</td>
                <td className="px-3 py-2">{row.losses}</td>
                <td className="px-3 py-2">{row.winPct}</td>
                <td className="px-3 py-2 text-right">{row.gb}</td>
                <td className="px-3 py-2">{row.home}</td>
                <td className="px-3 py-2">{row.away}</td>
                <td className="px-3 py-2">{row.l10}</td>
                <td className="px-3 py-2">{row.streak}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminTable;