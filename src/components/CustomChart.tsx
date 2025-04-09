import { useTheme } from 'styled-components'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { Bar } from 'react-chartjs-2'
import { CustomChartProps } from '@/types'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

function CustomChart(props: CustomChartProps) {
  const { data, labels, type } = props
  const theme = useTheme()

  const currencyConverter = (value: number) =>
    value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })

  const options = {
    responsive: true,
    scaleShowVerticalLines: false,
    scales: {
      x: {
        border: {
          display: false,
        },
        grid: {
          display: false,
        },
        ticks: {
          color: theme.typographies.subtitle,
        },
      },
      y: {
        border: {
          display: false,
        },
        grid: {
          color: theme.appDefaultStroke,
        },
        ticks: {
          color: theme.typographies.subtitle,
          callback: function (value: string | number) {
            return currencyConverter(Number(value))
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            return currencyConverter(context.raw)
          },
        },
      },
    },
  }

  const chartData = {
    labels,
    datasets: [
      {
        data: data,
        borderColor: 'rgb(200, 163, 95)',
        backgroundColor: 'rgba(200, 163, 95, 1)',
      },
    ],
  }

  return type === 'bar' ? (
    <Bar options={options} data={chartData} />
  ) : (
    <Line options={options} data={chartData} />
  )
}


export default CustomChart
