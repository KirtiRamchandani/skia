               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %_entrypoint_v "_entrypoint" %sk_FragColor
               OpExecutionMode %_entrypoint_v OriginUpperLeft

               ; Debug Information
               OpName %sk_FragColor "sk_FragColor"  ; id %3
               OpName %_UniformBuffer "_UniformBuffer"  ; id %8
               OpMemberName %_UniformBuffer 0 "testInputs"
               OpMemberName %_UniformBuffer 1 "colorGreen"
               OpMemberName %_UniformBuffer 2 "colorRed"
               OpName %_entrypoint_v "_entrypoint_v"    ; id %10
               OpName %main "main"                      ; id %2

               ; Annotations
               OpDecorate %main RelaxedPrecision
               OpDecorate %sk_FragColor RelaxedPrecision
               OpDecorate %sk_FragColor Location 0
               OpDecorate %sk_FragColor Index 0
               OpMemberDecorate %_UniformBuffer 0 Offset 0
               OpMemberDecorate %_UniformBuffer 1 Offset 16
               OpMemberDecorate %_UniformBuffer 1 RelaxedPrecision
               OpMemberDecorate %_UniformBuffer 2 Offset 32
               OpMemberDecorate %_UniformBuffer 2 RelaxedPrecision
               OpDecorate %_UniformBuffer Block
               OpDecorate %7 Binding 0
               OpDecorate %7 DescriptorSet 0
               OpDecorate %75 RelaxedPrecision
               OpDecorate %78 RelaxedPrecision
               OpDecorate %79 RelaxedPrecision

               ; Types, variables and constants
      %float = OpTypeFloat 32
    %v4float = OpTypeVector %float 4
%_ptr_Output_v4float = OpTypePointer Output %v4float
%sk_FragColor = OpVariable %_ptr_Output_v4float Output  ; RelaxedPrecision, Location 0, Index 0
%_UniformBuffer = OpTypeStruct %v4float %v4float %v4float   ; Block
%_ptr_Uniform__UniformBuffer = OpTypePointer Uniform %_UniformBuffer
          %7 = OpVariable %_ptr_Uniform__UniformBuffer Uniform  ; Binding 0, DescriptorSet 0
       %void = OpTypeVoid
         %12 = OpTypeFunction %void
    %float_0 = OpConstant %float 0
    %v2float = OpTypeVector %float 2
         %16 = OpConstantComposite %v2float %float_0 %float_0
%_ptr_Function_v2float = OpTypePointer Function %v2float
         %20 = OpTypeFunction %v4float %_ptr_Function_v2float
       %bool = OpTypeBool
      %false = OpConstantFalse %bool
%_ptr_Uniform_v4float = OpTypePointer Uniform %v4float
        %int = OpTypeInt 32 1
      %int_0 = OpConstant %int 0
 %float_0_75 = OpConstant %float 0.75
         %40 = OpConstantComposite %v2float %float_0_75 %float_0
     %v2bool = OpTypeVector %bool 2
    %v3float = OpTypeVector %float 3
         %52 = OpConstantComposite %v3float %float_0_75 %float_0 %float_0_75
     %v3bool = OpTypeVector %bool 3
 %float_0_25 = OpConstant %float 0.25
         %63 = OpConstantComposite %v4float %float_0_75 %float_0 %float_0_75 %float_0_25
     %v4bool = OpTypeVector %bool 4
%_ptr_Function_v4float = OpTypePointer Function %v4float
      %int_1 = OpConstant %int 1
      %int_2 = OpConstant %int 2


               ; Function _entrypoint_v
%_entrypoint_v = OpFunction %void None %12

         %13 = OpLabel
         %17 =   OpVariable %_ptr_Function_v2float Function
                 OpStore %17 %16
         %19 =   OpFunctionCall %v4float %main %17
                 OpStore %sk_FragColor %19
                 OpReturn
               OpFunctionEnd


               ; Function main
       %main = OpFunction %v4float None %20         ; RelaxedPrecision
         %21 = OpFunctionParameter %_ptr_Function_v2float

         %22 = OpLabel
         %68 =   OpVariable %_ptr_Function_v4float Function
         %26 =   OpAccessChain %_ptr_Uniform_v4float %7 %int_0
         %30 =   OpLoad %v4float %26
         %31 =   OpCompositeExtract %float %30 0
         %25 =   OpExtInst %float %1 Fract %31
         %33 =   OpFOrdEqual %bool %25 %float_0_75
                 OpSelectionMerge %35 None
                 OpBranchConditional %33 %34 %35

         %34 =     OpLabel
         %37 =       OpAccessChain %_ptr_Uniform_v4float %7 %int_0
         %38 =       OpLoad %v4float %37
         %39 =       OpVectorShuffle %v2float %38 %38 0 1
         %36 =       OpExtInst %v2float %1 Fract %39
         %41 =       OpFOrdEqual %v2bool %36 %40
         %43 =       OpAll %bool %41
                     OpBranch %35

         %35 = OpLabel
         %44 =   OpPhi %bool %false %22 %43 %34
                 OpSelectionMerge %46 None
                 OpBranchConditional %44 %45 %46

         %45 =     OpLabel
         %48 =       OpAccessChain %_ptr_Uniform_v4float %7 %int_0
         %49 =       OpLoad %v4float %48
         %50 =       OpVectorShuffle %v3float %49 %49 0 1 2
         %47 =       OpExtInst %v3float %1 Fract %50
         %53 =       OpFOrdEqual %v3bool %47 %52
         %55 =       OpAll %bool %53
                     OpBranch %46

         %46 = OpLabel
         %56 =   OpPhi %bool %false %35 %55 %45
                 OpSelectionMerge %58 None
                 OpBranchConditional %56 %57 %58

         %57 =     OpLabel
         %60 =       OpAccessChain %_ptr_Uniform_v4float %7 %int_0
         %61 =       OpLoad %v4float %60
         %59 =       OpExtInst %v4float %1 Fract %61
         %64 =       OpFOrdEqual %v4bool %59 %63
         %66 =       OpAll %bool %64
                     OpBranch %58

         %58 = OpLabel
         %67 =   OpPhi %bool %false %46 %66 %57
                 OpSelectionMerge %72 None
                 OpBranchConditional %67 %70 %71

         %70 =     OpLabel
         %73 =       OpAccessChain %_ptr_Uniform_v4float %7 %int_1
         %75 =       OpLoad %v4float %73            ; RelaxedPrecision
                     OpStore %68 %75
                     OpBranch %72

         %71 =     OpLabel
         %76 =       OpAccessChain %_ptr_Uniform_v4float %7 %int_2
         %78 =       OpLoad %v4float %76            ; RelaxedPrecision
                     OpStore %68 %78
                     OpBranch %72

         %72 = OpLabel
         %79 =   OpLoad %v4float %68                ; RelaxedPrecision
                 OpReturnValue %79
               OpFunctionEnd
