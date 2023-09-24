const currencies = ['USD', 'EUR']
const startDate = '2023-09-19T06:16:05.031Z'
const endDate = '2023-09-21T06:16:05.031Z'

const date = new Date(Date.now() + 4 * (60 * 60 * 1000)).toISOString()
const niceDate = date.slice(0, 10)

currencies.forEach(currency => {
  fetch(
    `https://nbg.gov.ge/gw/api/ct/monetarypolicy/currencies/?currencies=${currency}&date=${date}`,
  )
    .then(response => response.json())
    .then(data => {
      // console.log(data)

      const { currencies } = data[0]
      const { rate, diff } = currencies[0]
      document.querySelector(`.${currency}`).innerHTML = `
    <br>  <br> ${currency} : ${rate}
    <br> Difference: ${diff}
    <br> Date: ${niceDate}`
    })
})

// fetch(
//   `https://nbg.gov.ge/gw/api/ct/monetarypolicy/currencies/?currencies=${currency}&currencies=${currency}&end=${endDate}&start=${startDate}`,
// )
//   .then(response => response.json())
//   .then(data => console.log(data))
