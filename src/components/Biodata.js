import React from 'react';
import logo2 from '../images/FOTO 4X6 MERAH.jpg';
import '../components/Biodata.css'


function Biodata() {

    const judul = 'biodata diriku'

    return (
        <div>
            <h1 className="text-left">{ judul.toUpperCase() }</h1>
            <>
                <h3 className="data-pribadi">{ 'data pribadi'.toUpperCase() }</h3>
                <table>
                    <tbody>
                        <tr>
                            <td rowSpan="16" width="720px">
                                <img 
                                src={logo2}
                                className="posisi-kiri"
                                alt="profil saya" width="520" height="auto" 
                                />
                            </td>
                        </tr>
                        <div className="posisi-kanan">
                            <tr>
                                <th>Nama Lengkap</th>
                                <td>:</td>
                                <td>Bagas Hary Cendekiawan</td>
                            </tr>
                            <tr>
                                <th>Tempat, Tanggal lahir</th>
                                <td>:</td>
                                <td>Temanggung, 03 Juli 1998</td>
                            </tr>
                            <tr>
                                <th>Kewarganegaran</th>
                                <td>:</td>
                                <td>Indonesia</td>
                            </tr>
                            <tr>
                                <th>Usia</th>
                                <td>:</td>
                                <td>23 Tahun</td>
                            </tr>
                            <tr>
                                <th>Jenis Kelamin</th>
                                <td>:</td>
                                <td>Laki-Laki</td>
                            </tr>
                            <tr>
                                <th>Agama</th>
                                <td>:</td>
                                <td>Islam</td>
                            </tr>
                            <tr>
                                <th>Alamat</th>
                                <td>:</td>
                                <td>Kp. Sumbersari RT001/011 Kel. Parakan Wetan, Kec. Parakan, 
                                    Kab. Temanggung, Jawa Tengah 56254</td>
                            </tr>
                            <tr>
                                <th>Status Perkawinan</th>
                                <td>:</td>
                                <td>Lajang</td>
                            </tr>
                            <tr>
                                <th>Jenis Disabilitas</th>
                                <td>:</td>
                                <td>Tuli</td>
                            </tr>
                            <tr>
                                <th>Alat Bantu Disabilitas</th>
                                <td>:</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <th>Domisili Saat Ini</th>
                                <td>:</td>
                                <td>Kab. Temanggung</td>
                            </tr>
                                <tr><th>Wilayah Tempat Ingin Bekerja</th>
                                <td>:</td>
                                <td>Semarang, Jakarta, Surabaya</td></tr>
                            <tr>
                                <th>Melamar Untuk Posisi</th>
                                <td>:</td>
                                <td>Front End Developer</td>
                            </tr>
                            <tr>
                                <th>No. HP / WA</th>
                                <td>:</td>
                                <td>085740283454 (chat only)</td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td>:</td>
                                <td><a href="bagasvergil@gmail.com">bagasvergil@gmail.com</a></td>
                            </tr>
                        </div>
                        
                    </tbody>
                </table>
            </> 
        </div>
    )
};

export default Biodata;