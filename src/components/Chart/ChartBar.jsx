import { useEffect } from 'react'
import * as am5 from '@amcharts/amcharts5'
import * as am5xy from '@amcharts/amcharts5/xy'
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated'

const ChartComponent = () => {
  useEffect(() => {
    var root = am5.Root.new('chartdiv')
    root._logo.dispose()

    // Set themes
    root.setThemes([am5themes_Animated.new(root)])
    // root.locale = am5locales_pt_BR

    // Create chart
    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: 'panX',
        wheelY: 'zoomX',
        pinchZoomX: true,
        paddingLeft: 0,
        paddingRight: 1,
      })
    )

    // Add cursor
    const cursor = chart.set('cursor', am5xy.XYCursor.new(root, {}))
    cursor.lineY.set('visible', false)

    // Create axes
    const xRenderer = am5xy.AxisRendererX.new(root, {
      minGridDistance: 30,
      minorGridEnabled: true,
    })

    xRenderer.labels.template.setAll({
      rotation: -90,
      centerY: am5.p50,
      centerX: am5.p100,
      paddingRight: 15,
    })

    xRenderer.grid.template.setAll({
      location: 1,
    })

    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        maxDeviation: 0.3,
        categoryField: 'country',
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {}),
      })
    )

    const yRenderer = am5xy.AxisRendererY.new(root, {
      strokeOpacity: 0.1,
    })

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        maxDeviation: 0.3,
        renderer: yRenderer,
      })
    )

    // Create series
    const series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: 'Series 1',
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: 'value',
        sequencedInterpolation: true,
        categoryXField: 'country',
        tooltip: am5.Tooltip.new(root, {
          labelText: '{valueY}',
        }),
      })
    )

    series.columns.template.setAll({
      cornerRadiusTL: 5,
      cornerRadiusTR: 5,
      strokeOpacity: 0,
    })

    series.columns.template.adapters.add('fill', (fill, target) => {
      return (
        target.dataItem.dataContext.fill ||
        chart.get('colors').getIndex(series.columns.indexOf(target))
      ) // Use custom color or fallback to default
    })

    series.columns.template.adapters.add('stroke', (stroke, target) => {
      return chart.get('colors').getIndex(series.columns.indexOf(target))
    })

    // Set data
    const data = [
      { country: 'Mandioca', value: 36, fill: '#fcf91e' },
      { country: 'Feijão', value: 6, fill: '#DE6C28' },
      { country: 'Banana', value: 3, fill: '#CCDE28' },
      { country: 'Abóbora', value: 4, fill: '#fa822d' },
      { country: 'Arroz', value: 6, fill: '#D4E0BA' },
      { country: 'Laranja', value: 2, fill: '#E14618' },
      { country: 'Eucalipto', value: 21, fill: '#26ff1f' },
      { country: 'Capim', value: 9, fill: '#0D2BEC' },
      { country: 'Tomate', value: 1, fill: '#28A8DE' },
      { country: 'Cana-de-açúcar', value: 1, fill: '#9BE032' },
    ]

    xAxis.data.setAll(data)
    series.data.setAll(data)

    // Make stuff animate on load
    series.appear(1000)
    chart.appear(1000, 100)

    return () => {
      root.dispose() // Clean up on component unmount
    }
  }, [])

  return <div id="chartdiv" style={{ width: '100%', height: '400px' }}></div>
}

export default ChartComponent
