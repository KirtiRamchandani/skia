               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %main "main" %sk_FragColor %c
               OpExecutionMode %main OriginUpperLeft

               ; Debug Information
               OpName %sk_FragColor "sk_FragColor"  ; id %7
               OpName %aTexture "aTexture"          ; id %11
               OpName %aSampledTexture "aSampledTexture"    ; id %14
               OpName %aSecondSampledTexture "aSecondSampledTexture"    ; id %18
               OpName %c "c"                                            ; id %19
               OpName %helpers_helper_h4ZT_aSampledTexture "helpers_helper_h4ZT_aSampledTexture"    ; id %2
               OpName %helpers_helper_h4ZT_aSecondSampledTexture "helpers_helper_h4ZT_aSecondSampledTexture"    ; id %3
               OpName %helper_h4TZ_aSampledTexture "helper_h4TZ_aSampledTexture"                                ; id %4
               OpName %helper_h4TZ_aSecondSampledTexture "helper_h4TZ_aSecondSampledTexture"                    ; id %5
               OpName %main "main"                                                                              ; id %6

               ; Annotations
               OpDecorate %helpers_helper_h4ZT_aSampledTexture RelaxedPrecision
               OpDecorate %helpers_helper_h4ZT_aSecondSampledTexture RelaxedPrecision
               OpDecorate %helper_h4TZ_aSampledTexture RelaxedPrecision
               OpDecorate %helper_h4TZ_aSecondSampledTexture RelaxedPrecision
               OpDecorate %sk_FragColor RelaxedPrecision
               OpDecorate %sk_FragColor Location 0
               OpDecorate %sk_FragColor Index 0
               OpDecorate %aTexture Binding 1
               OpDecorate %aTexture DescriptorSet 0
               OpDecorate %aSampledTexture RelaxedPrecision
               OpDecorate %aSampledTexture Binding 2
               OpDecorate %aSampledTexture DescriptorSet 0
               OpDecorate %aSecondSampledTexture RelaxedPrecision
               OpDecorate %aSecondSampledTexture Binding 3
               OpDecorate %aSecondSampledTexture DescriptorSet 0
               OpDecorate %c Location 1
               OpDecorate %25 RelaxedPrecision
               OpDecorate %26 RelaxedPrecision
               OpDecorate %30 RelaxedPrecision
               OpDecorate %31 RelaxedPrecision

               ; Types, variables and constants
      %float = OpTypeFloat 32
    %v4float = OpTypeVector %float 4
%_ptr_Output_v4float = OpTypePointer Output %v4float
%sk_FragColor = OpVariable %_ptr_Output_v4float Output  ; RelaxedPrecision, Location 0, Index 0
         %12 = OpTypeImage %float 2D 0 0 0 2 Rgba8
%_ptr_UniformConstant_12 = OpTypePointer UniformConstant %12
   %aTexture = OpVariable %_ptr_UniformConstant_12 UniformConstant  ; Binding 1, DescriptorSet 0
         %15 = OpTypeImage %float 2D 0 0 0 1 Unknown
         %16 = OpTypeSampledImage %15
%_ptr_UniformConstant_16 = OpTypePointer UniformConstant %16
%aSampledTexture = OpVariable %_ptr_UniformConstant_16 UniformConstant  ; RelaxedPrecision, Binding 2, DescriptorSet 0
%aSecondSampledTexture = OpVariable %_ptr_UniformConstant_16 UniformConstant    ; RelaxedPrecision, Binding 3, DescriptorSet 0
    %v2float = OpTypeVector %float 2
%_ptr_Input_v2float = OpTypePointer Input %v2float
          %c = OpVariable %_ptr_Input_v2float Input     ; Location 1
         %22 = OpTypeFunction %v4float %_ptr_UniformConstant_12
       %void = OpTypeVoid
         %40 = OpTypeFunction %void


               ; Function helpers_helper_h4ZT_aSampledTexture
%helpers_helper_h4ZT_aSampledTexture = OpFunction %v4float None %22     ; RelaxedPrecision
         %23 = OpFunctionParameter %_ptr_UniformConstant_12

         %24 = OpLabel
         %26 =   OpLoad %16 %aSampledTexture        ; RelaxedPrecision
         %27 =   OpLoad %v2float %c
         %25 =   OpImageSampleImplicitLod %v4float %26 %27  ; RelaxedPrecision
                 OpReturnValue %25
               OpFunctionEnd


               ; Function helpers_helper_h4ZT_aSecondSampledTexture
%helpers_helper_h4ZT_aSecondSampledTexture = OpFunction %v4float None %22   ; RelaxedPrecision
         %28 = OpFunctionParameter %_ptr_UniformConstant_12

         %29 = OpLabel
         %31 =   OpLoad %16 %aSecondSampledTexture  ; RelaxedPrecision
         %32 =   OpLoad %v2float %c
         %30 =   OpImageSampleImplicitLod %v4float %31 %32  ; RelaxedPrecision
                 OpReturnValue %30
               OpFunctionEnd


               ; Function helper_h4TZ_aSampledTexture
%helper_h4TZ_aSampledTexture = OpFunction %v4float None %22     ; RelaxedPrecision
         %33 = OpFunctionParameter %_ptr_UniformConstant_12

         %34 = OpLabel
         %35 =   OpFunctionCall %v4float %helpers_helper_h4ZT_aSampledTexture %33
                 OpReturnValue %35
               OpFunctionEnd


               ; Function helper_h4TZ_aSecondSampledTexture
%helper_h4TZ_aSecondSampledTexture = OpFunction %v4float None %22   ; RelaxedPrecision
         %36 = OpFunctionParameter %_ptr_UniformConstant_12

         %37 = OpLabel
         %38 =   OpFunctionCall %v4float %helpers_helper_h4ZT_aSecondSampledTexture %36
                 OpReturnValue %38
               OpFunctionEnd


               ; Function main
       %main = OpFunction %void None %40

         %41 = OpLabel
         %42 =   OpFunctionCall %v4float %helper_h4TZ_aSampledTexture %aTexture
                 OpStore %sk_FragColor %42
         %43 =   OpFunctionCall %v4float %helper_h4TZ_aSecondSampledTexture %aTexture
                 OpStore %sk_FragColor %43
         %44 =   OpFunctionCall %v4float %helper_h4TZ_aSampledTexture %aTexture
                 OpStore %sk_FragColor %44
                 OpReturn
               OpFunctionEnd
