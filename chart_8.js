var colorTheme = ['1ebfb3','117be1', 'f2645a', '555555','ffd700'];

var chart_8 = c3.generate({
  bindto: '#chart_8',
      data: {
        columns: [
          ['Disasters', 36, 31, 52, 49, 43, 57, 79, 78, 78, 108, 74, 75, 82, 77]
        ],
        type: 'area-spline',
        colors: {
            'Disasters': colorTheme[0]
        }
      },
      axis: {
        x: {
          type: 'category',
          categories: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013']
        }
      },
      grid: {
          x: {
              show: false
          },
          y: {
              show: true
          }
      }
    });