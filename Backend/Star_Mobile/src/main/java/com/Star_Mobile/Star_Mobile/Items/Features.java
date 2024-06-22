package com.Star_Mobile.Star_Mobile.Items;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class Features{
    private String cpu;
    private String screen;
    private String battery;
    private String sensor;
    private String ramRom;
    private String others;
}
