var data = [8, 1, 5, 11, 2];
console.log(data);

 function insertionSort(data){
    // loop index berdasarkan panjang array dimulai dari urutan kedua
    for(var n = 1; n < data.length; n++){
        // loop perbandingan data array 
        for (var i = n; i > 0; i--){
             // cek perbandingan apakah angka ke-i lebih kecil dari angka sebelumnya
            if(data[i] < data[i-1]){
                temp = data[i]; //jika angka ke-i lebih kecil dari angka sebelumnya maka akan disimpan ke dlm temporary
                data[i] = data[i-1]; //angka ke-i diganti dengan angka sebelumnya
                data[i-1] = temp; //angka sebelumnya digantikan dengan angka yg ada di temporary
            }
        }
        console.log(`Looping ke ${n+1} = ${data.join(', ')}`); //Menampilkan proses looping dengan separator
    }
}
console.log(insertionSort(data)); //Menjalankan Function Insertion Sort