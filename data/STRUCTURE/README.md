This directory contains input files for STRUCTURE. These files are generated
(under Windows) as per the instructions in [the docs](../../doc/README.md).

- [ratsSNPs_Structure_input_preHWE](ratsSNPs_Structure_input_preHWE) - file 
  used during data cleaning, prior to Hardy-Weinberg calculations. The purpose
  of this file is to detect outlying individuals whose ancestral structure is
  at odds with the rest of the population it belongs to. 
- [ratsSNPS_Structure_input_CLEAN](ratsSNPS_Structure_input_CLEAN) - 
  cleaned file with all outliers removed. Used for the 'real' STRUCTURE  
  analyses. Generated from 
  [this](../PGDSpider/ratsSNPs_PGDSpyder_input_CLEAN.csv) file. 
- [ratsSNPS_Structure_input_CLEAN.str](ratsSNPS_Structure_input_CLEAN.str) - 
  input for fastStructure, generated from ratsSNPS_Structure_input_CLEAN
  using ../../script/make_fs_input.pl, which also requires the sanitized
  metadata file from the KASP output (see data/Raw_data).