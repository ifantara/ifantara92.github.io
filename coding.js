function terimainput(){
	var data = confirm('Apakah anda yakin ingin menambahkan data?');
if ( data===true ) {
	alert("Selamat Data Anda Berhasil di Entry");

	var a=document.forms['biodata']['nama'].value;
	var b=document.forms['biodata']['email'].value;
	var c=document.forms['biodata']['saran'].value;
	

	var tabel = document.getElementById("tabel1");
	var row = tabel.insertRow(1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);

	

	cell1.innerHTML = a;
	cell2.innerHTML = b;
	cell3.innerHTML = c;

	
}else {
	alert('Silahkan cek kembali data anda');
} 
}