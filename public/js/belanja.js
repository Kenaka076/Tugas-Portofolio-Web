const app = Vue.createApp({
    data() {
        return {
            products: [
                { name: 'Kemeja Putih', price: 250000, image: 'img/kemeja.jpg' },
                { name: 'Celana Jeans', price: 200000, image: 'img/celana.jpg' },
                { name: 'Jaket Kulit', price: 500000, image: 'img/jaket.jpg' },
                { name: 'Jam Tangan', price: 150000, image: 'img/jam tangan.jpg' },
                { name: 'Sepatu Sneakers', price: 300000, image: 'img/sepatu.jpg' },
                { name: 'Topi Trucker', price: 50000, image: 'img/topi.jpg' },
            ],
            cart: [],
            wallet: '',
            addWallet: [
                { amount: 100000 },
                { amount: 200000 },
                { amount: 500000 },
                { amount: 1000000 },
                { amount: 2000000 },
                { amount: 5000000 },
                { amount: 10000000 },
            ]
        };
    },
    methods: {
        clearCart() {
            // Mengosongkan keranjang dengan menghapus semua item di dalamnya
            this.cart = [];
        },
        
        addToCart(product, isDuplicate = false) {
            const existingItem = this.cart.find(item => item.name === product.name);
        

            if (existingItem) {
                existingItem.quantity++;
            } else {
                this.cart.push({ name: product.name, price: product.price, quantity: 1, image: product.image });
            }
        
        },
        formatNumber(number) {
            return number.toLocaleString('id-ID');
        },
        addAmount(amount) {
            this.wallet = (parseFloat(this.wallet || 0) + amount);
        },
        removeFromCart(index) {
            const item = this.cart[index];

            if (item.quantity > 1) {
                item.quantity--;
            } else {
                // hapus jika sisa 1
                this.cart.splice(index, 1);
            } 
        },
        getTotal() {
            return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
        },
        resetWallet() {
            // Reset nilai wallet menjadi 0
            this.wallet = '0';
        }
    }
});

app.mount('#app');
