/**
* Appcelerator Titanium Mobile
* This is generated code. Do not modify. Your changes *will* be lost.
* Generated code is Copyright (c) 2009-2011 by Appcelerator, Inc.
* All Rights Reserved.
*/
#import <Foundation/Foundation.h>
#import "TiUtils.h"
#import "ApplicationDefaults.h"
 
@implementation ApplicationDefaults
  
+ (NSMutableDictionary*) copyDefaults
{
    NSMutableDictionary * _property = [[NSMutableDictionary alloc] init];

    [_property setObject:[TiUtils stringValue:@"hL5txAoBXnoXsYKMZvGB0TYIOIgCsNu0"] forKey:@"acs-oauth-secret-development"];
    [_property setObject:[TiUtils stringValue:@"vE40Hjvd8K1yfL0YYmrIrDI4iFawwqiS"] forKey:@"acs-oauth-key-development"];
    [_property setObject:[TiUtils stringValue:@"T1ePMRY8AyoaTVepAcz0V8IzLqyh9K91"] forKey:@"acs-api-key-development"];
    [_property setObject:[TiUtils stringValue:@"rxx98OEPfkt0dT3Yhhok2yi7i57emCFT"] forKey:@"acs-oauth-secret-production"];
    [_property setObject:[TiUtils stringValue:@"j0wiMhH4rNEXKpMG91Yx21IWSvpSd6Zs"] forKey:@"acs-oauth-key-production"];
    [_property setObject:[TiUtils stringValue:@"GPJC0Og0HXxJbSEL2bxEJHXHY9oDvVqH"] forKey:@"acs-api-key-production"];
    [_property setObject:[TiUtils stringValue:@"v8"] forKey:@"ti.android.runtime"];

    return _property;
}
@end
