
const bai8 = () => {
    return (  
        <div>
           <table style={{width:"100%",borderCollapse:"collapse"}}>
            
            <thead>
                <tr style={{border:"1px solid grey",backgroundColor:"gray"}}>
                    <th>STT</th>
                    <th>Ho va ten</th>
                    <th>ngay sinh</th>
                    <th>Gioi tinh</th>
                    <th>dia chi</th>
                    <th>hanh dong</th>
                </tr>
            </thead>
            <tbody>
                <tr style={{textAlign:"center",border:"1px solib gray"}}>
                 <td>1</td>
                 <td>Hun</td>
                 <td>01/01/2004</td>
                 <td>Nam</td>
                 <td>Ha Noi</td>
                 <td style={{display:"flex",justifyContent:"space-evenly"}}>
                    <button style={{border:"none",borderRadius:"5px",width:"40px",height:"30px"}}>Sua</button>
                    <button style={{backgroundColor:"red",color:"white",border:"none",borderRadius:"5px",width:"40px",height:"30px"}}>Xoa</button>
                 </td>

                </tr>
                  <tr style={{textAlign:"center",border:"1px solib gray"}}>
                 <td>2</td>
                 <td>Hun</td>
                 <td>02/02/2007</td>
                 <td>nam</td>
                 <td>Ha Noi</td>
                 <td style={{display:"flex",justifyContent:"space-evenly"}}>
                    <button style={{border:"none",borderRadius:"5px",width:"40px",height:"30px"}}>Sua</button>
                    <button style={{backgroundColor:"red",color:"white",border:"none",borderRadius:"5px",width:"40px",height:"30px"}}>Xoa</button>
                 </td>

                </tr>
            </tbody>
           </table>
        </div>
    );
}
 
export default bai8;