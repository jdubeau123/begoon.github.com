function tape_file() {
var file = {
name: "CHERV.RKR",
start: 0x0000,
end: 0x086f,
entry: 0x0000,
image:
"\xC3\x4D\x08\x21\x01\xC0\x36\x00\x2B\x36\x4D\x36\x1D\x36\x99\x36\x93\x23\x36\x27\x7E\x7E\xE6\x20\xCA\x15\x00\x21\x08\xE0\x36\x80" +
"\x2E\x04\x36\xD0\x36\x36\x2C\x36\x23\x36\x49\x2E\x08\x36\xA4\xFF\xC3\xA2\xFF\x31\x30\x30\x30\x30\xC3\x9A\x00\x21\xD0\x36\x11\x30" +
"\x09\x3E\x00\x77\x23\x1B\x7B\xB2\xC2\x41\x00\xC9\x3E\x80\x32\x01\xC0\xAF\x32\x00\xC0\x32\x00\xC0\x3E\x31\x32\xC3\x02\x21\x30\x30" +
"\x22\xE2\x02\x22\xE4\x02\xC9\xC5\x77\x19\x77\x05\xC2\x69\x00\xC1\xC9\xC5\x23\x77\x0D\xC2\x72\x00\xC1\xC9\x21\xB4\x38\x01\x2A\x09" +
"\xE5\x3E\x06\x11\x4E\x00\xCD\x67\x00\x3E\x14\xCD\x71\x00\xE1\x3E\x03\xCD\x71\x00\x3E\x11\xCD\x67\x00\xC9\xCD\x3B\x00\xCD\x4C\x00" +
"\xCD\x7A\x00\x21\x3D\x3D\x0E\x40\x3E\x1C\xCD\x71\x00\xC3\xCD\x00\x20\x6D\x7C\x69\x2C\x6B\x61\x66\x2E\x72\x74\x70\x20\x31\x39\x38" +
"\x37\x21\xC2\x3C\x1A\x77\x23\x13\x05\xC2\xC4\x00\xC9\x11\xB0\x00\x06\x12\xCD\xC1\x00\x21\x2F\x3E\x11\x15\x01\x06\x07\xCD\xC4\x00" +
"\x21\x7D\x3E\x11\x1C\x01\x06\x06\xCD\xC4\x00\x21\x57\x3E\x11\x0C\x01\x06\x09\xCD\xC4\x00\x21\xA5\x3E\x11\x04\x01\x06\x08\xCD\xC4" +
"\x00\xC3\x47\x01\x1D\x1C\x20\x77\x6C\x65\x77\x6F\x1C\x0E\x20\x77\x70\x72\x61\x77\x6F\x0B\x20\x77\x77\x65\x72\x68\x0F\x20\x77\x6E" +
"\x69\x7A\x6B\x6E\x6F\x70\x6B\x61\x2D\x52\x20\x6E\x61\x7E\x61\x6C\x6F\x20\x69\x67\x72\x79\x73\x74\x6F\x70\x20\x6C\x60\x62\x61\x71" +
"\x20\x6B\x6E\x6F\x70\x6B\x61\x21\xA0\x00\x11\x10\x00\x19\x22\x5E\x01\x11\x70\x01\x06\x09\x1A\x07\x6F\x13\x1A\x07\x67\x22\xC2\x00" +
"\x13\x2A\x5E\x01\x23\x23\x22\x5E\x01\x05\xC2\x56\x01\xC3\x96\x01\x10\xB6\x3E\xB4\x16\xB5\xB0\x33\x17\x39\x3A\x38\x10\x98\x9C\x1C" +
"\x9B\x90\x11\x6B\x6E\x6F\x70\x6B\x69\x20\x75\x70\x72\x61\x77\x6C\x65\x6E\x69\x71\x3A\x20\x11\x83\x01\x21\xEF\x3D\x06\x13\xCD\xC4" +
"\x00\x11\x36\x01\x21\x19\x3F\x06\x11\xCD\xC4\x00\x11\x22\x01\x21\x37\x3F\x06\x14\xCD\xC4\x00\x21\x05\x39\x01\xE7\x01\x16\x24\x0A" +
"\xC5\xE5\xD5\x11\x4E\x00\x06\x08\x1F\x4F\xDA\xD2\x01\x3E\x20\xC3\xD4\x01\x3E\x7F\x77\x19\x79\x05\xC2\xC8\x01\xD1\xE1\xC1\x23\x03" +
"\x15\xC2\xBF\x01\xC3\x53\x02\x00\x1E\x10\x10\x10\x7E\x00\x7E\x52\x52\x52\x42\x00\x7E\x12\x12\x12\x0C\x00\x7E\x4A\x4A\x4A\x34\x00" +
"\x4C\x52\x32\x12\x7E\x00\x7E\x10\x18\x24\x42\x00\x06\x27\xAF\x77\x23\x05\xC2\x0E\x02\xC9\x21\x52\x39\x11\x4E\x00\x0E\x06\xE5\xCD" +
"\x0C\x02\xE1\x19\x0D\xC2\x1E\x02\xC9\x70\x6F\x70\x6F\x77\x01\xFF\x0F\x0B\x79\xB0\xC2\x2E\x02\xC9\x01\xFF\x07\xCD\x12\xF8\xC2\x48" +
"\x02\x0B\x79\xB0\xC2\x3B\x02\xC9\xCD\x03\xF8\xFE\x52\xCA\x70\x02\xC9\x68\x59\xCD\x38\x02\xCD\x16\x02\x0E\x07\xCD\x09\xF8\xCD\x4C" +
"\x00\xCD\x38\x02\x0E\x07\xCD\x09\xF8\xCD\x4C\x00\xC3\xB7\x01\x00\xCD\x3B\x00\x0E\x07\xCD\x09\xF8\x0E\x1F\xCD\x09\xF8\x3E\x80\x32" +
"\x01\xC0\xAF\x32\x00\xC0\x32\x00\xC0\x21\xBB\x3B\xE5\xE5\x00\x00\x00\x00\x00\x3E\x2A\x32\xBB\x3B\x21\xAE\x38\x01\x3B\x15\xCD\x80" +
"\x00\x21\x60\x38\x11\xB4\x02\x06\x3C\x1A\x77\x23\x13\x05\xC2\xA9\x02\xC3\xF0\x02\x06\x20\x20\x20\x20\x20\x70\x6F\x70\x79\x74\x6B" +
"\x61\x20\x4E\x31\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x77\x79\x20\x75\x76\x65\x20\x6E\x61\x62\x72\x61\x6C" +
"\x69\x20\x30\x30\x30\x30\x20\x6F\x7E\x6B\x6F\x77\x20\x20\x20\x11\xE1\x00\x00\x00\x00\x00\xCD\x03\xF8\x47\x78\xB7\xFE\x18\xCA\x13" +
"\x03\xFE\x08\xCA\x17\x03\xFE\x19\xCA\x1E\x03\xFE\x1A\xCA\x25\x03\xC3\xF6\x02\x23\xC3\x29\x03\x11\xFF\xFF\x19\xC3\x29\x03\x11\xB2" +
"\xFF\x19\xC3\x29\x03\x11\x4E\x00\x19\x7E\xB7\xC2\x4E\x03\x3E\x2A\x77\x11\x01\x0F\x1B\x7B\xB2\xC2\x34\x03\xE5\xCD\x80\x03\xE1\xCD" +
"\x1B\xF8\xFE\xFF\xCA\xFA\x02\xB8\xCA\xF9\x02\xC3\xF6\x02\x3A\x8E\x38\x32\xE2\x02\x3A\x8F\x38\x32\xE3\x02\x3A\x90\x38\x32\xE4\x02" +
"\x3A\x91\x38\x32\xE5\x02\x3A\xC3\x02\x3C\xFE\x34\xCA\x81\x04\x32\xC3\x02\x0E\x07\xCD\x09\xF8\xCD\x09\xF8\xCD\x09\xF8\xC3\x70\x02" +
"\x00\x00\x00\x00\x21\x00\x00\x22\x00\x30\x3E\xC3\x32\x81\x03\x3E\x99\x32\x82\x03\x3E\x03\x32\x83\x03\x2A\x00\x30\x23\x7C\xFE\x08" +
"\xCA\xE4\x03\x22\x00\x30\x3A\x91\x38\x3C\xFE\x3A\xCA\xB3\x03\x32\x91\x38\xC9\x3E\x30\x32\x91\x38\x3A\x90\x38\x3C\xFE\x3A\xCA\xC5" +
"\x03\x32\x90\x38\xC9\x3E\x30\x32\x90\x38\x3A\x8F\x38\x3C\xFE\x3A\xCA\xD7\x03\x32\x8F\x38\xC9\x3E\x30\x32\x8F\x38\x3A\x8E\x38\x3C" +
"\x32\x8E\x38\xC9\xCD\x3B\x00\x21\xE9\x39\x11\x28\x04\x06\x33\x1A\x77\x23\x13\x05\xC2\xEF\x03\x21\x92\x3A\x11\x5A\x04\x06\x1A\xCD" +
"\xC4\x00\x3E\x11\x0E\x07\xCD\x09\xF8\x3D\xC2\x04\x04\x11\x22\x01\x21\x33\x3F\x06\x14\xCD\xC4\x00\xCD\x4C\x00\xCD\x20\x08\xCD\x3A" +
"\x08\xCD\x20\x08\xC3\x0D\x04\x00\x75\x20\x2D\x20\x75\x20\x21\x20\x7B\x20\x61\x20\x6A\x20\x74\x20\x61\x20\x6E\x20\x21\x20\x21\x20" +
"\x20\x74\x20\x79\x20\x20\x20\x77\x20\x79\x20\x69\x20\x67\x20\x72\x20\x61\x20\x6C\x20\x21\x20\x21\x20\x21\x20\x71\x20\x20\x20\x74" +
"\x20\x77\x20\x6F\x20\x6A\x20\x20\x20\x72\x20\x61\x20\x62\x20\x21\x20\x21\x20\x21\xAF\x32\x81\x03\x32\x82\x03\x32\x83\x03\xC3\x9A" +
"\x00\xCD\x3B\x00\x21\xE7\x39\x11\x5B\x05\x06\x38\xCD\xC4\x00\x2A\xE2\x02\x22\x15\x3A\x2A\xE4\x02\x22\x17\x3A\x3A\x01\x30\xFE\x04" +
"\xDA\x42\x05\xFE\x05\xDA\x29\x05\xFE\x06\xDA\x05\x05\xFE\x07\xDA\xE1\x04\x21\x83\x3A\x11\x62\x07\x06\x37\xCD\xC4\x00\x21\xD3\x3A" +
"\x11\x9A\x07\x06\x33\xCD\xC4\x00\x21\x22\x3B\x11\xCE\x07\x06\x32\xCD\xC4\x00\x21\x78\x3B\x11\x00\x08\x06\x20\xCD\xC4\x00\xC3\x01" +
"\x04\x21\x86\x3A\x11\xC0\x06\x06\x33\xCD\xC4\x00\x21\xD2\x3A\x11\xF4\x06\x06\x33\xCD\xC4\x00\x21\x1D\x3B\x11\x28\x07\x06\x3A\xCD" +
"\xC4\x00\xC3\x01\x04\x21\x87\x3A\x11\x3F\x06\x06\x2D\xCD\xC4\x00\x21\xD5\x3A\x11\x6C\x06\x06\x2C\xCD\xC4\x00\x21\x23\x3B\x11\x99" +
"\x06\x06\x27\xCD\xC4\x00\xC3\x01\x04\x21\x82\x3A\x11\xF2\x05\x06\x39\xCD\xC4\x00\x21\xE1\x3A\x11\x2C\x06\x06\x13\xCD\xC4\x00\xC3" +
"\x01\x04\x21\x83\x3A\x11\x93\x05\x06\x37\xCD\xC4\x00\x21\xDA\x3A\x11\xCB\x05\x06\x27\xCD\xC4\x00\xC3\x01\x04\x74\x79\x20\x70\x72" +
"\x6F\x69\x67\x72\x61\x6C\x2C\x20\x20\x70\x20\x6F\x20\x7E\x20\x74\x20\x65\x20\x6E\x20\x6E\x20\x65\x20\x6A\x20\x7B\x20\x69\x20\x6A" +
"\x20\x20\x6E\x61\x62\x72\x61\x77\x20\x30\x30\x30\x30\x20\x6F\x7E\x6B\x6F\x77\x73\x20\x74\x61\x6B\x69\x6D\x20\x72\x65\x7A\x75\x6C" +
"\x78\x74\x61\x74\x6F\x6D\x20\x74\x79\x20\x6E\x65\x20\x64\x6F\x73\x74\x6F\x69\x6E\x20\x64\x61\x76\x65\x20\x77\x79\x62\x69\x77\x61" +
"\x74\x78\x20\x70\x79\x6C\x78\x20\x69\x7A\x20\x70\x6F\x64\x73\x74\x69\x6C\x6B\x69\x20\x72\x61\x62\x6F\x7E\x65\x67\x6F\x20\x6B\x6F" +
"\x74\x61\x20\x77\x65\x6C\x69\x6B\x6F\x67\x6F\x20\x77\x69\x7A\x69\x72\x71\x6E\x75\x20\x7E\x74\x6F\x2D\x76\x65\x20\x6D\x6F\x76\x65" +
"\x7B\x78\x20\x73\x7E\x69\x74\x61\x74\x78\x20\x73\x65\x62\x71\x20\x77\x7A\x71\x74\x79\x6D\x20\x6E\x61\x20\x70\x73\x61\x72\x6E\x60" +
"\x20\x6D\x75\x64\x72\x65\x6A\x7B\x65\x67\x6F\x20\x6D\x6C\x61\x64\x7B\x69\x6D\x20\x6B\x6F\x72\x6D\x75\x7B\x65\x7E\x78\x69\x6D\x67" +
"\x6F\x77\x6F\x72\x71\x74\x20\x6E\x65\x64\x61\x77\x6E\x6F\x20\x75\x7E\x65\x6E\x69\x6B\x20\x61\x70\x74\x65\x6B\x61\x72\x71\x20\x6F" +
"\x74\x77\x65\x64\x61\x6C\x20\x71\x64\x75\x2C\x20\x70\x72\x69\x67\x6F\x74\x6F\x77\x6C\x65\x6E\x6E\x6F\x67\x6F\x20\x69\x6D\x20\x64" +
"\x6C\x71\x20\x73\x77\x6F\x65\x67\x6F\x20\x64\x71\x64\x69\x2C\x20\x69\x20\x73\x70\x71\x74\x69\x6C\x20\x6D\x75\x64\x72\x65\x6A\x7B" +
"\x69\x6A\x20\x67\x6F\x74\x6F\x77\x20\x77\x7A\x71\x74\x78\x20\x74\x65\x62\x71\x20\x6E\x61\x20\x65\x67\x6F\x20\x6D\x65\x73\x74\x6F" +
"\x70\x72\x6F\x20\x74\x61\x6B\x69\x68\x2C\x20\x6B\x61\x6B\x20\x74\x79\x2C\x20\x67\x6F\x77\x6F\x72\x71\x74\x20\x2D\x20\x6D\x6F\x72" +
"\x64\x6F\x6A\x20\x77\x20\x62\x69\x74\x6F\x65\x20\x73\x74\x65\x6B\x6C\x6F\x2C\x20\x70\x72\x69\x64\x65\x74\x73\x71\x20\x74\x65\x62" +
"\x65\x20\x68\x6C\x65\x62\x61\x74\x78\x20\x6B\x65\x66\x69\x72\x20\x69\x7A\x20\x74\x75\x66\x6C\x69\x20\x77\x65\x6C\x69\x7E\x61\x6A" +
"\x7B\x65\x67\x6F\x20\x69\x7A\x20\x77\x65\x6C\x69\x6B\x69\x68\x20\x69\x20\x75\x73\x70\x6F\x6B\x61\x69\x77\x61\x74\x78\x20\x72\x61" +
"\x7A\x62\x69\x74\x6F\x65\x20\x73\x65\x72\x64\x63\x65\x20\x65\x67\x6F\x20\x6C\x60\x62\x69\x6D\x6F\x67\x6F\x20\x70\x61\x77\x6C\x69" +
"\x6E\x61\x74\x6F\x6C\x78\x6B\x6F\x20\x77\x72\x6F\x76\x64\x65\x6E\x6E\x6F\x65\x20\x62\x6C\x61\x67\x6F\x72\x6F\x64\x73\x74\x77\x6F" +
"\x20\x73\x77\x65\x74\x6C\x65\x6A\x7B\x65\x67\x6F\x20\x6E\x65\x20\x70\x6F\x7A\x77\x6F\x6C\x71\x65\x74\x20\x65\x6D\x75\x20\x6E\x61" +
"\x7A\x77\x61\x74\x78\x20\x74\x65\x62\x71\x20\x74\x61\x6B\x2C\x20\x6B\x61\x6B\x20\x74\x79\x20\x74\x6F\x67\x6F\x20\x7A\x61\x73\x6C" +
"\x75\x76\x69\x77\x61\x65\x7B\x78\x2E\x64\x61\x76\x65\x20\x73\x61\x6D\x79\x6A\x20\x70\x6F\x73\x6C\x65\x64\x6E\x69\x6A\x20\x6F\x73" +
"\x6B\x77\x65\x72\x6E\x69\x74\x65\x6C\x78\x20\x6D\x6F\x67\x69\x6C\x20\x6E\x65\x20\x6E\x61\x73\x74\x75\x70\x69\x6C\x20\x62\x79\x20" +
"\x6E\x61\x20\x67\x72\x61\x62\x6C\x69\x2C\x20\x7A\x61\x62\x72\x61\x77\x7B\x69\x73\x78\x20\x74\x61\x6B\x20\x77\x79\x73\x6F\x6B\x6F" +
"\x01\xFF\x0A\xCD\x1B\xF8\xFE\x52\xCA\x47\x08\x0B\x79\xB0\xC2\x23\x08\x0E\x07\xCD\x09\xF8\xCD\x4C\x00\xC9\x0E\x14\x21\x33\x3F\x36" +
"\x00\x23\x0D\xC2\x3F\x08\xC9\xCD\x03\xF8\xC3\x74\x04\x21\x81\x03\x36\x00\x23\x36\x00\x23\x36\x00\x31\x00\x10\xCD\x3B\x00\xC3\x03" +
"\x00\x2A\x70\x20\x72\x20\x60\x20\x77\x20\x65\x20\x74\x2A\x2A\x2A"};
ui.file_loaded(file);
}
tape_file();