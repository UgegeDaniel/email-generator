function capitalizeName(name) {
    return name.toUpperCase();
}

function generateEmail() {
    function formatNumberToMoney(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    const customerName = document.getElementById('customerName').value.trim();
    const amountDisbursed = formatNumberToMoney(document.getElementById('amountDisbursed').value);
    const amountToPay = formatNumberToMoney(document.getElementById('amountToPay').value);


    if (customerName === '' || amountDisbursed === '' || amountToPay === '') {
        alert('Please fill in all fields');
        return;
    }

    const capitalizedCustomerName = capitalizeName(customerName);
    
    const subject = `<h2>DEMAND NOTICE ON THE INDEBTEDNESS OF <bold bold style="font-weight: bold">${capitalizedCustomerName}</bold></h2>`;
    const body = `
    May 16, 2024
    <br/>
    Attn: <bold bold style="font-weight: bold">${capitalizedCustomerName}</bold>
    <p>Fairmoney Microfinance Bank is in custody of your executed contract in favour of <bold bold style="font-weight: bold">${capitalizedCustomerName}</bold> whom we availed the sum of <bold style="font-weight: bold">₦ ${amountDisbursed}.00</bold>
    <br/>
    Consequently, you have reneged and not complied with the terms and conditions of your loan agreement with us. This is evidenced by your inability to honor your repayments. Your outstanding balance owed as at today ₦ <bold style="font-weight: bold"> ${amountToPay}.00</bold>
    <br/>
    The bank views your action as totally Unacceptable. Without prejudice, We are by this mail, giving you 2 working days to regularize your outstanding payment, failure to comply, We would be taking robust recovery actions in line with the ambits of the law. I am hopeful we can resolve this without going through legal proceedings or commissioning an external debt recovery agency to pursue this debt. Feel free to contact us if you would like to discuss payment options.
    <br/>
    It is our earnest hopes you digest the above and be guided accordingly.
    <br/>
    <br/>
    You can pay into your FairMoney Microfinance bank account:, login into the app and click on ‘’repay” and follow the prompt to make payment. We are here to assist you through this process. For any inquiries or assistance, please don't hesitate to call us at +23417001276 or +2341888577, or send an email to help@fairmoney.io.
    </p>`;

    document.getElementById('emailSubject').innerHTML = subject;
    document.getElementById('emailBody').innerHTML = body;
}
