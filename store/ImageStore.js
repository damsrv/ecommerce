import { create } from 'zustand'

export const useImageStore = create((set) => ({
    images:[],
    setImages: (list) => set(() => ({images:list})),
    cart:[],
    setCart: (item) => set((state)=> ({cart:[...state.cart, item]})), // relire syntaxe
    incrementCartItemQuantity: (itemId) => set((state) => {
        
        var index = state.cart.findIndex((item) => item.imdbID === itemId);
        
        var object = state.cart.find((item)=>{
            return item.imdbID === itemId;
        });

        object.Quantity ++;

        return {
            cart : state.cart.map((item)=>{


                if (item.imdbID === itemId)
                {
                    return {...item, Quantity:object.Quantity};
                }
                // ne pas oublier le return de base dans un map.
                return item;
            }),
        }
    }),
    decrementCartItemQuantity: (itemId) => set((state) => {
        
        var index = state.cart.findIndex((item) => item.imdbID === itemId);
        
        var object = state.cart.find((item)=>{
            return item.imdbID === itemId;
        });


        return {
            cart : state.cart.map((item)=>{


                if (item.imdbID === itemId)
                {
                    console.log(item.Quantity);

                    if (item.Quantity !== 0) {

                        object.Quantity --;

                        console.log(item.Quantity, "here");

                        return {...item, Quantity:object.Quantity};

                    } else {
                        console.log(item.Quantity, "0 ici");
                        console.log(item, "valeur item");


                        return item;
                    }
                }
                // ne pas oublier le return de base dans un map.
                return item;
            }),
        }
    }),

}))