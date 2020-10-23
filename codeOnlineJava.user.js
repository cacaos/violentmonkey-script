// ==UserScript==
// @name        java-S 
// @icon        https://code.y444.cn/favicon.ico
// @namespace   Violentmonkey Scripts
// @match       *://*/*
// @grant       none
// @version     1.0
// @author      -
// @description 2020/10/23 下午2:00:49
// ==/UserScript==


setInterval(function(){
    document.getElementsByClassName("ivu-btn ivu-btn-default")[4].click();
},10000);



// import java.io.BufferedReader;
// import java.io.DataOutputStream;
// import java.io.InputStreamReader;
// import java.net.HttpURLConnection;
// import java.net.URL;
// import java.nio.charset.StandardCharsets;
// import java.time.LocalDateTime;

// public class Main {
//     public static void main(String[] args) {
//         String t = "人民币账户白银";
//         try {
//             // while (true) {
//                 String asyn = getOnsInfo();
//                 int i = asyn.indexOf(t);
//                 int end = asyn.indexOf("}", i);
//                 String substring = asyn.substring(0, end);
//                 String substring1 = substring.substring(substring.lastIndexOf("{"));

//                 int b = substring1.indexOf("buyprice");
//                 int be = substring1.indexOf(",", b);
//                 int s = substring1.indexOf("\"sellprice");
//                 int se = substring1.indexOf(",", s);

//                 String br = substring1.substring(b + 10, be);
//                 String sr = substring1.substring(s + 13, se);
                
//                 System.out.println(
//                         LocalDateTime.now().toString()
//                                 + ": "
//                                 + "log-Info:"
//                                 + br
//                                 + " / "
//                                 + sr);

//             // Thread.sleep(200);
                
//             // }
//         } catch (Exception e) {
//             e.printStackTrace();
//         }
//     }


//     private static String getOnsInfo() {
//         String var0 = "https://mybank.icbc.com.cn/servlet/AsynGetDataServlet";
//         StringBuilder var1 = new StringBuilder();

//         try {
//             HttpURLConnection var2 = (HttpURLConnection) (new URL(var0)).openConnection();
//             var2.setRequestMethod("POST");
//             var2.setDoInput(true);
//             var2.setDoOutput(true);
//             var2.setUseCaches(false);
//             var2.setInstanceFollowRedirects(true);
//             var2.setRequestProperty("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
//             var2.connect();
//             DataOutputStream var3 = new DataOutputStream(var2.getOutputStream());
//              String var4 = "Area_code=1001&trademode=1&proIdsIn=&isFirstTime=1&tranCode=A00500";
//             var3.writeBytes(var4);
//             var3.flush();
//             var3.close();
//             if (var2.getResponseCode() == 200) {
//                 BufferedReader var5 = new BufferedReader(new InputStreamReader(var2.getInputStream(), StandardCharsets.UTF_8));

//                 String var6;
//                 while ((var6 = var5.readLine()) != null) {
//                     var1.append(var6);
//                 }

//                 var5.close();
//                 var2.disconnect();
//             }
//         } catch (Exception var7) {
//             var7.printStackTrace();
//         }

//         return var1.toString();
//     }
// }


