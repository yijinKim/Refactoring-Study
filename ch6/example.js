/**
 * Before
 */
 function printOwing(invoice) {
    printBanner();  
    let outstanding = calculatorOutstanding();
  
    // 세부 사항 출력
    console.log(`고객명: ${invoice.customer}`);
    console.log(`채무액: ${outstanding}`);
  }
  
  /**
   * After extracting function
   */
  function printOwing(invoice) {
    printBanner();
    let outstanding = calculatorOutstanding();
    printDetails(outstanding); //세부 사항 출력 함수
  
    function printDetails(outstanding) {
      console.log(`고객명: ${invoice.customer}`);
      console.log(`채무액: ${outstanding}`);
    }
  }