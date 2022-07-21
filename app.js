

const iceCream = [{
    name: 'Razzberry',
    img: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGljZWNyZWFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    price: 1.50
},
{
    name: 'Chocolate',
    img: 'https://images.unsplash.com/photo-1553452118-621e1f860f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNob2NvbGF0ZSUyMGljZWNyZWFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    price: 1.25
},
{
    name: 'Strawberry',
    img: 'https://images.unsplash.com/photo-1593558159516-d0be2a960c52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aWNlY3JlYW18ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    price: 1.30
},
{
    name: 'Vanilla',
    img: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aWNlY3JlYW18ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    price: 1.00

},
{
    name: 'Rocky Road',
    img: 'https://images.unsplash.com/photo-1598268121084-c8f7126e0cef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aWNlY3JlYW18ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    price: 2.00
},
{
    name: ' Cookie/Cream',
    img: 'https://images.unsplash.com/photo-1531240062960-4842b265a1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGljZWNyZWFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    price: 2.00
},
{
    name: 'Mint Choc',
    img: 'https://images.unsplash.com/photo-1592864042311-a3babede6944?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWludCUyMGNob2NvbGF0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    price: 1.75
},
{
    name: 'Oreo',
    img: 'https://images.unsplash.com/photo-1620416162788-932341950162?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b3Jlb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    price: 3.00
}]

let orders = []

function drawMenu() {
    let template = ''
    iceCream.forEach(flavor => {
        template += `
       <div class="col-md-3" onclick="order('${flavor.name}')">
            <div>
                <img class="img-fluid ice-creams" src="${flavor.img}" alt="">
                <p class="bg-light mb-0 p-3"> ${flavor.name} </p>
                <p class="bg-light mt-0 p-3">$${flavor.price}</p>
            </div>
        </div>
    
    
     
    `})
    let menuElm = document.getElementById('flavors')
    menuElm.innerHTML = template

}
drawMenu()

function order(selectedName) {
    console.log('ordering', selectedName);
    let pickedFlavor = iceCream.find(flavor => flavor.name == selectedName)
    console.log(pickedFlavor);
    orders.push(pickedFlavor)
    drawOrders()
}

function drawOrders() {
    let template = ''
    orders.forEach(order =>
        template += `
        <div class="col-12 text-dark">
        <p><b><span>${order.name}</b></span>        
        <span>$${order.price}</span></p>
        
        </div>
        
        
        `)
    console.log(template);
    let orderElm = document.getElementById('choices')
    orderElm.innerHTML = template
    drawSubTotal()

}

function drawSubTotal() {
    let subtotal = 0
    orders.forEach(order => subtotal += order.price)
    console.log('subtotal', subtotal);
    let subTotalElm = document.getElementById('subtotal')
    subTotalElm.innerText = subtotal.toFixed(2)

}

function clearOrders() {
    orders = []
    drawOrders()
}


