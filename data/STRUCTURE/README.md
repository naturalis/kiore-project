This directory contains input files for STRUCTURE. These files are generated
(under Windows) as per the instructions in [the docs](../../doc/README.md).

- [ratsSNPs_Structure_input_preHWE](ratsSNPs_Structure_input_preHWE) - file 
  used during data cleaning, prior to Hardy-Weinberg calculations. The purpose
  of this file is to detect outlying individuals whose ancestral structure is
  at odds with the rest of the population it belongs to. 
- [ratsSNPS_Structure_input_clean](ratsSNPS_Structure_input_clean) - cleaned 
  file with all outliers removed. Used for the 'real' STRUCTURE analyses.
  Generated from [this](../PGDSpider/ratsSNPs_PGDSpyder_input_CLEAN.csv) file.
