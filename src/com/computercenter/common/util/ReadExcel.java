package com.computercenter.common.util;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFCellStyle;
import org.apache.poi.hssf.usermodel.HSSFDateUtil;
import org.apache.poi.hssf.usermodel.HSSFFont;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.hssf.util.Region;
import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.apache.poi.poifs.filesystem.POIFSFileSystem;
import org.apache.poi.ss.usermodel.Font;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;

public class ReadExcel {
    
    private static POIFSFileSystem fs;
    private static HSSFWorkbook wb;
    private static HSSFSheet sheet;
    private static HSSFRow row;
    private static String TEST_WORKBOOK_NAME = "/Users/paul/Documents/workspace_java/excelDemo/jsb8y.xls";
    
    private static Map<String,Map<String,List<UtilBean>>> excmap = new HashMap<String,Map<String,List<UtilBean>>>();

	public static void main(String[] args) throws IOException {
//	    writeExcel();
	    InputStream in = null;  
	    try {  
	        in = new FileInputStream(new File(TEST_WORKBOOK_NAME));  
	        readExcel(in);
	        
	    } catch (IOException e) {  
	        System.out.println(e.toString());  
	    }finally {  
	        try {  
	            in.close();  
	        } catch (IOException e) {  
	            System.out.println(e.toString());  
	        }  
	    } 
	    
	    writeExcelSimple(excmap);
	}
	
	public static void readExcel(InputStream is)
	{
	    try {
            fs = new POIFSFileSystem(is);
            wb = new HSSFWorkbook(fs);
        } catch (IOException e) {
            e.printStackTrace();
        }
        sheet = wb.getSheetAt(0);
        // 得到总行数
        int rowNum = sheet.getLastRowNum();
        row = sheet.getRow(0);
        for (int i = 1; i <= rowNum; i++) {
            row = sheet.getRow(i);
            
            int loginnumber = Integer.valueOf(getCellFormatValue(row.getCell((short)0)).trim() + "");
            String username = getCellFormatValue(row.getCell((short)1)).trim() + "";
            String date = getCellFormatValue(row.getCell((short)2)).trim() + "";
            String onwork = getCellFormatValue(row.getCell((short)3)).trim() + "";
            String offwork = getCellFormatValue(row.getCell((short)4)).trim() + "";
        	String qdtime = getCellFormatValue(row.getCell((short)5)).trim() + "";
        	String qttime = getCellFormatValue(row.getCell((short)6)).trim() + "";
        	String latetime = getCellFormatValue(row.getCell((short)7)).trim() + "";
        	String zttime = getCellFormatValue(row.getCell((short)8)).trim() + "";
        	String worktime = getCellFormatValue(row.getCell((short)9)).trim() + "";
        	String department = getCellFormatValue(row.getCell((short)10)).trim() + "";
        	String flag = ((getCellFormatValue(row.getCell((short)11)).trim() + "").equals("")) ? "B" : getCellFormatValue(row.getCell((short)11)).trim() + "";
        	
        	if(excmap.get(department) == null)
        	{
        	    Map<String,List<UtilBean>> mapuser = new HashMap<String,List<UtilBean>>();
        		if(mapuser.get(username) == null)
            	{
            		UtilBean ubean = new UtilBean();
            		ubean.setLoginnumber(loginnumber);
                 	ubean.setUsername(username);
                 	ubean.setDate(date);
                 	ubean.setOnwork(onwork);
                 	ubean.setOffwork(offwork);
                 	ubean.setQdtime(qdtime);
                 	ubean.setQttime(qttime);
                 	ubean.setLatetime(latetime);
                 	ubean.setZttime(zttime);
                 	ubean.setWorktime(worktime);
                 	ubean.setDepartment(department);
                 	ubean.setFlag(flag);
                 	
                 	List<UtilBean> ubeanlist = new ArrayList<UtilBean>();
            		ubeanlist.add(ubean);
            		mapuser.put(username, ubeanlist);
            	}
            	else
            	{
            		UtilBean ubean = new UtilBean();
            		ubean.setLoginnumber(loginnumber);
                 	ubean.setUsername(username);
                 	ubean.setDate(date);
                 	ubean.setOnwork(onwork);
                 	ubean.setOffwork(offwork);
                 	ubean.setQdtime(qdtime);
                 	ubean.setQttime(qttime);
                 	ubean.setLatetime(latetime);
                 	ubean.setZttime(zttime);
                 	ubean.setWorktime(worktime);
                 	ubean.setDepartment(department);
                 	ubean.setFlag(flag);
            		mapuser.get(username).add(ubean);
            	}
        		excmap.put(department, mapuser);
        	}
        	else
        	{
        		Map<String,List<UtilBean>> mapuser1 = excmap.get(department);
        		if(mapuser1.get(username) == null)
            	{
            		UtilBean ubean = new UtilBean();
            		ubean.setLoginnumber(loginnumber);
                 	ubean.setUsername(username);
                 	ubean.setDate(date);
                 	ubean.setOnwork(onwork);
                 	ubean.setOffwork(offwork);
                 	ubean.setQdtime(qdtime);
                 	ubean.setQttime(qttime);
                 	ubean.setLatetime(latetime);
                 	ubean.setZttime(zttime);
                 	ubean.setWorktime(worktime);
                 	ubean.setDepartment(department);
                 	ubean.setFlag(flag);
                 	
                 	List<UtilBean> ubeanlist = new ArrayList<UtilBean>();
            		ubeanlist.add(ubean);
            		mapuser1.put(username, ubeanlist);
            	}
            	else
            	{
            		UtilBean ubean = new UtilBean();
            		ubean.setLoginnumber(loginnumber);
                 	ubean.setUsername(username);
                 	ubean.setDate(date);
                 	ubean.setOnwork(onwork);
                 	ubean.setOffwork(offwork);
                 	ubean.setQdtime(qdtime);
                 	ubean.setQttime(qttime);
                 	ubean.setLatetime(latetime);
                 	ubean.setZttime(zttime);
                 	ubean.setWorktime(worktime);
                 	ubean.setDepartment(department);
                 	ubean.setFlag(flag);
                 	mapuser1.get(username).add(ubean);
            	}
        		excmap.put(department, mapuser1);
        	}
        }
        
        System.out.println(excmap.size());
}
	
	/**
     * 根据HSSFCell类型设置数据
     * @param cell
     * @return
     */
    private static String getCellFormatValue(HSSFCell cell) {
        String cellvalue = "";
        if (cell != null) {
            // 判断当前Cell的Type
            switch (cell.getCellType()) {
            // 如果当前Cell的Type为NUMERIC
            case HSSFCell.CELL_TYPE_NUMERIC:
            case HSSFCell.CELL_TYPE_FORMULA: {
                // 判断当前的cell是否为Date
                if (HSSFDateUtil.isCellDateFormatted(cell)) {
                    // 如果是Date类型则，转化为Data格式
                    
                    //方法1：这样子的data格式是带时分秒的：2011-10-12 0:00:00
                    //cellvalue = cell.getDateCellValue().toLocaleString();
                    
                    //方法2：这样子的data格式是不带带时分秒的：2011-10-12
                    Date date = cell.getDateCellValue();
                    SimpleDateFormat sdf = new SimpleDateFormat("HH:mm");
                    cellvalue = sdf.format(date);
                    
                }
                // 如果是纯数字
                else {
                    // 取得当前Cell的数值
                    cellvalue = String.valueOf(cell.getNumericCellValue());
                }
                break;
            }
            // 如果当前Cell的Type为STRIN
            case HSSFCell.CELL_TYPE_STRING:
                // 取得当前的Cell字符串
                cellvalue = cell.getRichStringCellValue().getString();
                break;
            // 默认的Cell值
            default:
                cellvalue = " ";
            }
        } else {
            cellvalue = "";
        }
        return cellvalue;

    }
    
    public static void writeExcelSimple(Map<String,Map<String,List<UtilBean>>> excmap)
    {

    	String name = "王二小";
	    try {
            HSSFWorkbook wb = new HSSFWorkbook();
            
            Set<Entry<String, Map<String, List<UtilBean>>>> set = excmap.entrySet();
            Iterator<Entry<String, Map<String, List<UtilBean>>>> iterator = set.iterator();
            while(iterator.hasNext())
            {
                Entry<String, Map<String, List<UtilBean>>> entry = iterator.next();
                HSSFSheet sheet = wb.createSheet(entry.getKey());
                
                Map<String, List<UtilBean>> utmap = entry.getValue();
                Set<Entry<String, List<UtilBean>>> utset = utmap.entrySet();
                Iterator<Entry<String, List<UtilBean>>> utiterator = utset.iterator();
                int y = 0;
                while(utiterator.hasNext())
                {
                    Entry<String, List<UtilBean>> utentry = utiterator.next();
                    HSSFRow row = sheet.createRow((short) y);
                    String tempusername = utentry.getKey();
                    List<UtilBean> ublist = utentry.getValue();
                    
                    for (int i = 0; i < ublist.size(); i++) {
                        UtilBean ubean = ublist.get(i);
                        // 四个参数分别是：起始行，起始列，结束行，结束列
                        sheet.addMergedRegion(new Region((short)i,(short)i,i,(short)i));
                        HSSFCell cell = row.createCell((short)i+1);
                        cell.setCellValue("√"); 
                    }
                    
                    sheet.addMergedRegion(new Region((short)0,(short)0,0,(short)0));
                    HSSFCell cell = row.createCell((short)0);
                    cell.setCellValue(tempusername); 
                    
                    y++;
                }
            }
            
            FileOutputStream fileOut = new FileOutputStream("workbook.xls");
            wb.write(fileOut);
            fileOut.close();
            System.out.print("OK");
        } catch (Exception ex) {
            ex.printStackTrace();
        }
	
    }

    static String A1 = "2015年9月份XX部全员考勤汇总表（打印时，可将上班类型、班次、备注、15元/班隐藏）";
    static String B2 = "正常出勤：√ ;轮休：○;带薪年休假：☆;节假日加班 ID ☺;出差：◇ ;病假：□;事假：△;探亲假：&;婚假：%;丧假：# ;产假：@;旷工：◆ ; 未上岗：+；已辞职：- ；";
	@SuppressWarnings("deprecation") 
	public static void writeExcel()
	{
	    try {
            HSSFWorkbook wb = new HSSFWorkbook();
            HSSFSheet sheet = wb.createSheet("new   sheet");
            HSSFCellStyle style = wb.createCellStyle(); // 样式对象

            HSSFFont font = (HSSFFont) wb.createFont();
            font.setFontName("宋体");
            font.setFontHeightInPoints((short) 18); // 字体高度
            font.setBoldweight(HSSFFont.BOLDWEIGHT_BOLD);//粗体显示
            
            style.setVerticalAlignment(HSSFCellStyle.VERTICAL_CENTER);// 垂直
            style.setAlignment(HSSFCellStyle.ALIGN_CENTER);// 水平
            style.setFont(font);
            
            
            HSSFRow row = sheet.createRow((short) 0);
            row.setHeight((short)600);
             // 四个参数分别是：起始行，起始列，结束行，结束列
            sheet.addMergedRegion(new Region(0, (short) 0, 0, (short) 30));
            HSSFCell ce = row.createCell((short) 0);
            // ce.setEncoding(HSSFCell.ENCODING_UTF_16);// 中文处理
            ce.setCellValue(A1); // 表格的第一行第一列显示的数据
            ce.setCellStyle(style); // 样式，居中
            
            HSSFRow rowb2 = sheet.createRow((short) 1);
            sheet.addMergedRegion(new Region(1, (short) 1, 1, (short) 1));
            HSSFCell ceb2 = rowb2.createCell((short) 1);
            ceb2.setCellValue(B2); 
//            ceb2.setCellStyle(style); // 样式，居中

            FileOutputStream fileOut = new FileOutputStream("workbook.xls");
            wb.write(fileOut);
            fileOut.close();
            System.out.print("OK");
        } catch (Exception ex) {
            ex.printStackTrace();
        }
	}
}