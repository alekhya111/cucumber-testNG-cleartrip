package com.cleartrip.utilities;

import java.io.FileInputStream;
import java.util.Properties;



public class PropertyUtils {
	
	public static String getValueFromKey(String key) throws Exception {

		Properties configproperties = new Properties();
		configproperties.load(new FileInputStream(ConstantUtils.propertyFilePath));
		return configproperties.getProperty(key);
	}

}
