var data = [8, 1, 5, 11, 2];
console.log(data);

 function selectionSort(data){
    // loop index berdasarkan panjang array
    for(var n = 0; n < data.length-1; n++){
       
        var sm = n; // variabel untuk nilai terkecil pada array

        // loop perbandingan data array
        for (var i = n + 1; i < data.length; i++){
             // cari nilai terkecil dari seluruh data array
            if(data[i] < data[sm]){
                sm = i; //nilai terkecil pada array
            }
        }
        temp = data[n]; //menyimpan angka yg akan ditukar dgn nilai terkecil ke temporary
        data[n] = data[sm]; //menempatkan posisi angka terkecil ke urutan yg lebih awal
        data[sm] = temp; //mengisi posisi angka yg sudah ditukar oleh nilai terkecil

        console.log(`Looping ke ${n+1} = ${data.join(', ')}`); //Menampilkan proses looping dengan separator
    }
}
console.log(selectionSort(data)); //Menjalankan Function Selection Sort
