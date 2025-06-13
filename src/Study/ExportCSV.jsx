import { Parser } from 'json2csv';

const ExportCSV = ({ data }) => {
  const exportData = () => {
    const parser = new Parser();
    const csv = parser.parse(data);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'bugs.csv';
    link.click();
  };

  return <button onClick={exportData}>Export as CSV</button>;
};
