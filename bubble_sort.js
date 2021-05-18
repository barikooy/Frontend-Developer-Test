var data = [8, 1, 5, 11, 2];
console.log(data);

 function bubbleSort(data){
    // loop index berdasarkan panjang array dimulai dari urutan pertama
    for(var n = 0; n < data.length-1; n++){
        // loop perbandingan data array
        for (var i = 0; i < data.length-1; i++){
             // cek perbandingan apakah angka ke-i lebih besar dari angka setelahya
            if(data[i] > data[i+1]){
                temp = data[i]; //jika angka ke-i lebih besar maka akan disimpan ke dlm temporary
                data[i] = data[i+1]; //angka ke-i diganti dengan angka setelahnya
                data[i+1] = temp; //angka setelahnya digantikan dengan angka yg ada di temporary
            }
        }
        console.log(`Looping ke ${n+1} = ${data.join(', ')}`); //Menampilkan proses looping dengan separator
    }
}
console.log(bubbleSort(data)); //Menjalankan Function Bubble Sort