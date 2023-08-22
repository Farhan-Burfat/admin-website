import React from 'react'
import "./topbar.css"
import { NotificationsNone, Language, Settings } from '@mui/icons-material';


export default function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className='logo'>FarhanAdmin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgVFhYZGBgaGBwaGhwZGBoaHBocGBgZHBoaHhgcIS4lIR4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHDQhIyE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4AMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAgMEBQYBB//EAD8QAAEDAgQEBAQFAwIDCQAAAAEAAhEDIQQSMUEFUWFxBiKB8JGhscETMkJS0Qfh8RSyYoLCFiMzNFNykqKj/8QAGQEAAgMBAAAAAAAAAAAAAAAAAQMAAgQF/8QAJhEAAwEAAgICAQQDAQAAAAAAAAECEQMhEjFBUQQUIjJxQlJhE//aAAwDAQACEQMRAD8A84QhCuAEIQiQ6ltPST2/hICUFCE3Asyk5y0DTzfXT+EjE4p2cyBygaEc/wC6k4LDA03PIzTII8tgLyJM+sbaFV1UjQCBt/effRAGDbnSrLDVg4ZM8A7uFha8Nn38lWKThaWbuSABzkxA97qBF1KrGiGNzO/e7lya3Qdzfso7WiCXE9LWJ3vPLoVb1ODF2V1hnfAA/S28zb1nqEs1cPnYA0kUxGkhx5NbuJ56kybIaTCjLe89lxWtbDU7Em7zoJcW99+wTeP4aGNDm5yCYl2QfBodm+ICJCuBSg0Ee+SS10IBUBhIbWMbT75qSx0gFV7id59UulVIOtimRbXsXcauiwAS2JLSltC0GdiwltCSAlhQW2LaltKQAnAFBbDNZW9DAUv9OMQ91QjNlIZkH1BVO8WPZaGvTAwBY5wAmcxBMZspmBfkPVJ5aazB3BE1ujfC6WGrVWUWsqzUmC57IsHHRo/4CFAx7GsrvpsENaGkXJNxzKV4WwVN+KwrTWJh3ly03DNDnu/M51ryNNAnuPADFPjUsaT9FWKbrBnNEqG0jBoQhLNYIQhQgBdaVxSqFPM0lwJAtI1HKw19VCE5jXMZnDwySJYWET1zREeu6MTS/E8wY0QAMrJzRzLYvMTIlRH4pz2tY6+WwLnOgT0OidNN7GEEnkBMi42jRQhXvbBT+DqZXAnaT8v7Jh07rtNkmPcoBXstsJj3OzXjKxx12sPjp8FU02k6e5UplF7DJaYgjppbT0XGNytM7CR1P+AUFhZp/Itj2sIIbmiMxOk7wrrhnF2ukPY2XDK1oAAJIjWJGwmSqLFnLDB+kXjcqNSDifLJIEmOWl/jHqiVYvFjzuBaWkOILTcggxBJ1KZTzqRMkkTefjEW3lSKOCAa17yRmnK2wLusnRs7woAhBEe/upmJosZAMTplBkiJ1da/ookf5RIPUcSRY3Vk3SVSqfgsRMNKbx38MRyx1qJ4CcaEhoTgC0GNsU0JYSWpYChRiXixVzRrsdhKlL8RmZ1hneBbKz1tBHoqmEnIOSXceQzj5PHSRwmk2jWo1H16eWm8GKecuIDi6xgjdKxlUPxD6jJLS1oBgjQXsbqOGJ9jbITxpPScnO6nxMchCFnOkCEIUIACdw1bI6QSDzG3VNJynSLpiSRc2UZCfXwQLA9jnPMS7MII+d13hpeTaHagBzvynXMBePkkYJlQOEdYBIjqOSffhwHS0emaSDr91CETiDXl8OOYi1gAB0htlb+H+CPf5suh3H2396pvhOEc+oG5bC7v88l6/wAK4YxjGtDYsD3PNKuvhGnilJeTKDA+HQxpzAXEGBqT3MD4Ko4j4XJYcsWnzC4IN7wOZXpQoiI9/NR34YQRAjsldodqfs8LxPCHNLy8wQRYg+aRMyodBxEtByg6nkJ+tl7FxzgragiBpcrzTinAXsJ8pgaxfsrzyJ9MVfD1soZw+Jo0iLZyG2kCAdd9efsKMMdfPPnI/N/6bbjKwbGN9pUSthy3aFHKd7M76+CRXrZgASSZN5nU32v3lR09hssw6fS/pCacFAHE5RdDhHNNpdL8w7oz7K16L1midCbaltW1HMYsBLCSE40IlGwiy5CWAukIYV041OsFkloTgCOFaZikIQsJ2wQhChACW2q4SASAdRz781YeH8AytWyvJDGsdUeRrlZFh1JIC0Xi3wmynSbicODkgF7TPlB0dBv3BVXaVeIxcVOfJejMYPHuZEmRy/iL/NWNFzHGWkgm5nlNvX3Ko2CbIpl02+SLKz7PUvB2Ca55cLgBvXTmea37Asr4GwT2YdjniHOvfkdCtW1Zm9ZrazodaElzEoFKR6KFZilUVcO0nTa/VWuLddQXtWWn2bIXRmuJeGWPBIaFi+KcF/DcSQSNgIHqYXqjnWVVxSg17DIlXjkpMlcc17R5LUp5eabLlqOJYAXWZrMykhbJryMHNxeAhdaUQlMpkpiT+DO3nsucNUzCVJaouEZDQFMYts+jm3mvBTQnGpDQnQERLZ0BdhDQlgKFWwaEuFwJQUKsw6EIWE7oIQhQhpvArM9aoz91Ej/9Kc/JetY4NLA3y6Q4GIg6g9F5B4Er5MdSGz87D6sJHzaFoOJsfXxzqOYwX5bnYf2WTmT8jpfhyrnG8zsyPHeFvw1VzCIaSXMIu0tJtB06LS/074E2q81niWsPlB3K1nirgdN2FcwNH/dsL2ncBgJIB7TbdM+AGAUDGmb5RyVvPZE/+aV6vRsmBOsCbYk1cWxlnOA7lUSCySQjNZU1bxDRDsudvW+il0Mex4Dg4EIsnixFSST3t9/qo727KeQNVGfTSakdNFc5mqrMe+J9VcV9JF5Kocewz0VZXY1MzXEDqSshijLitLx2rlELLvN1t4l8mT8qtxBRol3Qc1PpYQDefRdwjIaOqktW+ONJacfk5G3iFsCfpplqeYmmWhxicCbanWo4KYpoSwkhLARKsAlLgQVCpiEIQued4EIVzheCktzPzE/tbtPMq0y69AqlPsrMHiTTeyo3Vj2uH/KQYXs9bhFLENbimS1+Rr2PYYmQCJGh1XlVXhjeTh76j3K9V8C4ljsGym12Z1OWuB1FyW25REdkr8jianWP/F5sbSY3wvH/AIuGr5/zta9jxy8hj43+CjeBGH8NztnFpHwlT/EwFHD1XNaGufDCdCcxj1sXKL4IbFGOo1i1tIWVL9rNdtOtXo1MGIFlW1OCNcSXPeZ6ga9YVuxtlGxtNxBym+wkifUKJtFE+yixfg3DuaQC6/UErL8Q8NV8MTUouD8uxmY58yQr/HVccxpczDUg0G5zl7i0G8aEEjSZuVlaPHsbVcWlrGEZjDpZZom+ckdNtVdb7LpfGk/hHjkwGVGy+QLafFXzPE7HgSCw8jBnbUbLzwVKVV+Z7MjyblhgOPVvPqNVpsP4Ze5oezzNOlrj0Va8dGTGLaNMzFtfodkximDKVQY578K0F4idys5jfFb3yBohMOvQLuZ9s74mcL3WYlO16znmSfmmwwzC1xOLDncl+T0tKJBAI5J4JjDMyiFIat8+jm376HGp5iZanmIiWOtKcammp1pVhTHAlApEroKhTBS7KRK4XKEwxiEIXPO6Wnh7CfiVRIkMGY99G/z6Lcfhttt2mJCpfB2Fim6of1ugdm2+pcrym65HvYrRHUma3tDL8FI0AgW9AsjxKvVw9XMx7mHYtJB+I2svRWM26QD6LIeJ8HY20m4Uv90tB4141pp8TiXVOH0xWeXvc1r8xMGQ3OLgK38KtimPLE3+Z/z6rAt4nno02a+VgIifM0Bp+mnVbnwxWOQMcZMTfsB/K51TiOumn6NZQCcqU5TVE2UlqErUUp4yvr2BCyHF+FBx8rAtriWKK2m3e5S6T0fxX49nn2B8GPe9rnQ1oIJt9F6fgqAa0NAsBCcpNEJwBMmfsVy8rv8A4eY/1Vb5Gx+5eXL1X+qzTkZbVy8syp3H6E867X9DjD5SMoJO527J3B09T6JpjVLoiAn8S2jLyvJH2p0JgFONctZipDzHJxpUcOS2uUFuSS1ydaU1h6b3uDGNLnHYD6/ytRw7wvo6qf8Alaberv4VK5Jn2wTxVXpGezJTZOgJ7AlbzD8IpM/Kxo6xJ+JUsUoSX+T9IYvxH8s8/ZgqrtKb/wD4kfVPs4NXP6I7uaPutzlXBZD9Q/ov+ln7PCFPwPB61US1kN/c7yj03PotFwPw21pD6sPdqG/ob35n5Kf4kZVY0PpgkN1i9u3ZGePfY6uX4kVgqRZSYwCS1sTtJ3nvK4Kz2HzMkf8ADchQ+FcaY8Q7824P+VeMAfAB1/tZaPQn579jmC4myp5QYcP0mx+fqmeL4XOw21nUb+/qm8Tw5r4tfZ2h9CE2MRVp+V7TUpxE/rb6fqjtPdUc/RdP7Mvw85apaTEuB356+9JWz4RXcx7CTZ1yTsGhwjvN/VY/jcSKzHXuCIgwRBnl21urHgOLzOGa0jMOUSXH6H4rHzRjOj+NerD1vDPBAjRTqblncDjWiGzt8AI+5V0ypZZU8Y+p0MW5VorjNG6dxNfMco1+iVRwgAk6qr7ZecmeyfSqWUhl7qrq4wsAim58/ty/cp/BcRa7VrmH9rhB/g+hTZpCal5qRj/6n0s1AnkQfmvIGhexf1FxLPwHAkSdBzXj7QmcfpleZev6FtCkjkmmC6WtnFOLTByvXn0LBSmuTYKUCmoS0OtKkUKbnuDGiXOIAHdRWhX/AIecym2riXzlpsERqXOMADqbD1Vbrxlskx5UkbbhWAZh6bWNguMZ3budv6DYKwY5YbgvjBtV+R7chP5LyD0mBBW3w0ESua/LdZ0MlLESC5NOckvKjvqKyF0POemXlNuqpBqIoW2UeAM/f36KzsQZvbRUWGxTmfnZtH86KypcTYbb8oiLrouXpmmlnZVcZ8MteS+n5HiSS2YnllWf/wBVWwzstVpHUXHxG63rKzD+q5POLTfX3ZcxWDY9kFuYEGQYNr+/RDtB1Pr2UnDONscBeVdUMrxIM9r2WF4twR9Al9InLuNSOnVOcI8QOaQCY+iOp9emTxaWrtGk4pwanUBloBjW8i3Ma/RY2thXYZ9zmYZEiba6reYbHtqN126D/J93Wc8UMljsunbcG8nml3OrsZx2000X/BuJucxpAuGANHynrZvzWtp4qWEk6C++nZeQeHuIFpDSRA/cLAOInfYr0nBY1mQMziXNtBnnz7Lmck4zsRSqdM1jPE7w54YYGaxjW+vr/CusH4ke5rfKTAGZw0mfmrfhPB6bTnDAbaugm29wpWM4JSeDDQ2f2iPopOMunO4ykqeKcs2uOe45we6gf9toDg9onK4iLXBgCfipHFuEhtyA6Pyxv0IO+qxXGMIxpztzGQZsQG306+it4r0xtcL8PKeym4rxN9d2Z7nETYOMwoYchxQzULRK+Ecm6beslsEBKlcXVsS6wyv7OhLCQltRKMU1afw9ghicNicMDDnZXNJ5i7Z6S1ZgK98I438PENGzxl9dR/Hqqc0ty8LcbSpaZnEOLG/guptZUp1CS++ewAyG8ZQRIPVeneGuJmvRa6YMQYgkFpg6/H1Wa/qTw3LUZiWjyvGV/wD72ix9W/7UjwFiozsvZwd8RH2WT2jTTw3j29Se5Ki1KsJ01ZGx+RVbiDfX4o+It0OuxCZOKVbiHubO9psNv46qI7EqKSjemnyAj0t/hVGOY0mfXlPv7qyqvIEtgt6H7qrxuJDxccj2EjT3tst60zPCKcMHCWuLex3vftb56KVg8Q9hAJzc+vc/NZ+pxF9J2sjbpp01VtS4i14kGSYJkac9N7o78B8cWlnjMUHiCNRfQ9Yg95WF4zw7Ic7QYNz03laP/U7nb6wjEUC9hsMotEbA2HU2VanVheW09M5wnihYYcbbK34nic9M32tf7Kg4jgSwyLt97JGHxRAynRLVf40Ncb+6SPRqlpkbiD1GsfILR8PxjnvaJhrANIByjYDe5WbeLp3DYksNtNx/hZLn4NXHbk9i4Fx1rgG7/aVc4zEy2QYOx5LyPCcXDHANAiDcC5kCdd/7KXjfETy0gO0aIvHuyzvjemtXL7Lri/ip9M5KtIO6tMAjnB3WS4rx4VQWtYWgjd0qJiMeX6kkyfh7JVa5Nmc9la/KtJzL6ZxKp6hJQE2fZjZMCUEzTfIToK0p6hLWCglNKbBSgrJlGh5pXWvIII1BBHcJoFdBViuHoVctxuCc39RbI6Pbcf8A2EdisF4YrlleIMOBBG4IuPv8Ve+EuIZHupk2dcff7KixhdRxbw0loL4MWlryHEdp+ixufF4PVeSN+zFWmx6i3xTFavdVv45gQYdy2ITdTFSrYL3SyDwSLlpBsWmCIM6+g+CqeIWPM73kknf1Sv8AUKNin7/Ht7+6AEX3EKbGPIouc3mHXYSRcR+k9rX0KgVagdZwyPAmxmRcSDy6/GNFf4qk6kwtc1ry79ZE5uQd1WM40XBuZpIymQRq315Lc+lpml+Twg8XpOGvxVVQxDmGxKuafEW1GZXwCeQ1PTlrp30VVjMKWE8ufv3ZJtv+UmuP9aLXCcRmZOvp8OStadcEC4tHp0j391jGuI0U7DY8ixRjlT6ZW+JruTQ4rK5pBEnnHf7QsxjMIWHodFc0sVmvaeXvf+UrFU87dLenL5K18apAinLxmclcTleiWlNrHSaeM0p6Ka8hdfVJiTpp69EhCARTHkGQkoQgQF1cXVZEOsdBUgFRU7TfsmRWdFaQ+1KCQ0pQKchTFIXJXCUQYP4asWPa4bEfDdOeJP8AxmvH6mtPqPYUIlPY+rnp0ydQSPfwSuRdaWlYy6pVg5oG+xSHv+Kq8LXloG40UsVs2uqppPHCQ165UemQ5KQBhscLxQPaWPuCIB97qkxjQS4RrM/dW3iDgLqE1KZzU9xu3+3VUTak3K3bqMErxfRkiyC4cj9CpLMVmGR5nkfSPjYd4XOIgCo6N7/HVQysbpy+jppeS0crMylNp1lTYpDmQqtb2iy+mPYauWnVWzMQHDX07X/hUKeoVy1O4+XOmLvj3tFjXYHAz/dVdRhaYKsBXB6pvEUgRPJW5IVLUVinPTICF0hcWQeCELsKYQ4hLa1BYreLBohLppOVEoLr2T2SQlAppjpS5WhMU0KlcJXJSHORbIkdJTb6kiOspDnSuFJut6QyZHqRkRuplCpKgU2kkBoJdNgLmVNa22Yc4cNwR9ktMjRMY9PsuoTCpFN6JVo01fjFR4LHPOU2I2PRUtbySohxJa+DsVLxfmZmHJdF58GDxzNMxXfmcSkLrtVxc5tt9nSSxAlh2yQhBPAgULoQQiQUx8KSx86qGlNcmRyePTK1OjtZiYTzXSkOClpPtEn6ELrSuISk8LDoeF0plEpisGC3JK5K6EG9ZMFtcnJVxieFA4Zj2XLQXOtdwMSfSNOUqizJvc9MVNKtaHCU08ruZJcqXXQyUdYwunKCYBJgEwBqTGw5pK61xGhIsRYxY6jsuFKLGl8K4UQ6qdQcrelgSe5lMcVwv4VUub+V8u9TqPfNR+AcRFNxY4+R+/7XaT2/stDxWjnYeY8w9P7IC3qozjXJ6m9RTZO03IlmhePdmh43se4UjhWKkFhUeoyGO7gqDh6mV0rc6yjNMqpz6FcUw2R9tCoateJYgPYO6qll5ElXQ/ibc9ghCEpjAXQVxCKeEOkLi7KEX2Q4Cll0pCFFTXRMAoQhAgIQhQgBdaJMLiVS1CtPtAfo3HBSDRaNh5fRUPGPD76IL2S9m/7m941HUK3wD8jGjorijjWuAtBiOYWxymcxclRba9Hmq4r3xFwoUz+IwQxxggaNd06FUSyWmumdKLVz5IAhCEsuSKWDe9j6jWyxkBxkWzaWJn4Kbw3jLqYyO8zPm3tzHRVULqIGtLGs9pcSwyNux6JsPUIFOMq81CYW2J/K7t/1KpQha79mfi9HX/lCZQhZ79jpBCEJbLAhCFCAgIQiiHVxCFGQEIQoiAhCFEQEuj+Yd11CtPtAr+LNYzQe9k/Q/MEIW45Neh3xB/5ap2b/ALwsGhCyc3s2fifwBCEJJrBCEKBOrhQhEB//2Q==" alt="" className='topAvatar' />
                </div>

            </div>
        </div>
    )
}
