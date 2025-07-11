               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %main "main" %sk_FragColor
               OpExecutionMode %main OriginUpperLeft

               ; Debug Information
               OpName %sk_FragColor "sk_FragColor"  ; id %3
               OpName %main "main"                  ; id %2

               ; Annotations
               OpDecorate %sk_FragColor RelaxedPrecision
               OpDecorate %sk_FragColor Location 0
               OpDecorate %sk_FragColor Index 0

               ; Types, variables and constants
      %float = OpTypeFloat 32
    %v4float = OpTypeVector %float 4
%_ptr_Output_v4float = OpTypePointer Output %v4float
%sk_FragColor = OpVariable %_ptr_Output_v4float Output  ; RelaxedPrecision, Location 0, Index 0
       %void = OpTypeVoid
          %8 = OpTypeFunction %void
    %float_1 = OpConstant %float 1
         %16 = OpConstantComposite %v4float %float_1 %float_1 %float_1 %float_1
       %bool = OpTypeBool
      %false = OpConstantFalse %bool


               ; Function main
       %main = OpFunction %void None %8

          %9 = OpLabel
                 OpBranch %10

         %10 = OpLabel
                 OpLoopMerge %14 %13 None
                 OpBranch %11

         %11 =     OpLabel
                     OpStore %sk_FragColor %16
                     OpBranch %12

         %12 =     OpLabel
                     OpBranch %13

         %13 =   OpLabel
                   OpBranchConditional %false %10 %14

         %14 = OpLabel
                 OpReturn
               OpFunctionEnd
