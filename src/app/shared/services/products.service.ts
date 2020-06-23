import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[] = [
    {"id":1,"title":"Muffin Batt - Ban Dream Zero","descriptionShort":"Reposition Trigeminal Nerve, Perc Endo Approach","descriptionLong":"Reposition Trigeminal Nerve, Percutaneous Endoscopic Approach","price":"229.19","currency":"RUB","amount":53,"image":"http://dummyimage.com/100x100.png/dddddd/000000"},
    {"id":2,"title":"Stock - Fish","descriptionShort":"Bypass 2 Cor Art from Cor Art, Open Approach","descriptionLong":"Bypass Coronary Artery, Two Arteries from Coronary Artery, Open Approach","price":"994.41","currency":"PHP","amount":71,"image":"http://dummyimage.com/100x100.png/dddddd/000000"},
    {"id":3,"title":"Trueblue - Blueberry 12x473ml","descriptionShort":"Bypass Pancreat Duct to Lg Int w Intralum Dev, Perc Endo","descriptionLong":"Bypass Pancreatic Duct to Large Intestine with Intraluminal Device, Percutaneous Endoscopic Approach","price":"159.53","currency":"THB","amount":86,"image":"http://dummyimage.com/100x100.png/dddddd/000000"},
    {"id":4,"title":"Placemat - Scallop, White","descriptionShort":"Bypass R Ext Iliac Art to Foot Art, Perc Endo Approach","descriptionLong":"Bypass Right External Iliac Artery to Foot Artery, Percutaneous Endoscopic Approach","price":"910.13","currency":"CNY","amount":18,"image":"http://dummyimage.com/100x100.png/5fa2dd/ffffff"},
    {"id":5,"title":"Carbonated Water - Blackcherry","descriptionShort":"Revision of Synth Sub in R Metacarpocarp Jt, Perc Approach","descriptionLong":"Revision of Synthetic Substitute in Right Metacarpocarpal Joint, Percutaneous Approach","price":"264.31","currency":"AZN","amount":43,"image":"http://dummyimage.com/100x100.png/5fa2dd/ffffff"},
    {"id":6,"title":"Steam Pan Full Lid","descriptionShort":"Bypass R Int Iliac Art to Low Ex Art, Open Approach","descriptionLong":"Bypass Right Internal Iliac Artery to Lower Extremity Artery, Open Approach","price":"906.99","currency":"RUB","amount":21,"image":"http://dummyimage.com/100x100.png/5fa2dd/ffffff"},
    {"id":7,"title":"Cake Sheet Combo Party Pack","descriptionShort":"Drainage of Right Tarsal Joint with Drain Dev, Perc Approach","descriptionLong":"Drainage of Right Tarsal Joint with Drainage Device, Percutaneous Approach","price":"348.72","currency":"MXN","amount":75,"image":"http://dummyimage.com/100x100.png/cc0000/ffffff"},
    {"id":8,"title":"Muffin Batt - Choc Chk","descriptionShort":"Excision of Trochlear Nerve, Perc Endo Approach","descriptionLong":"Excision of Trochlear Nerve, Percutaneous Endoscopic Approach","price":"273.54","currency":"PLN","amount":21,"image":"http://dummyimage.com/100x100.png/5fa2dd/ffffff"},
    {"id":9,"title":"Bagel - Everything","descriptionShort":"Drainage of R Extraoc Muscle with Drain Dev, Open Approach","descriptionLong":"Drainage of Right Extraocular Muscle with Drainage Device, Open Approach","price":"906.16","currency":"CAD","amount":95,"image":"http://dummyimage.com/100x100.png/ff4444/ffffff"},
    {"id":10,"title":"Sauce - Oyster","descriptionShort":"Reposition Left Finger Phalangeal Joint, Open Approach","descriptionLong":"Reposition Left Finger Phalangeal Joint, Open Approach","price":"896.42","currency":"ETB","amount":23,"image":"http://dummyimage.com/100x100.png/5fa2dd/ffffff"},
    {"id":11,"title":"Yogurt - Cherry, 175 Gr","descriptionShort":"Mouth and Throat, Fragmentation","descriptionLong":"Mouth and Throat, Fragmentation","price":"753.93","currency":"HUF","amount":91,"image":"http://dummyimage.com/100x100.png/ff4444/ffffff"},
    {"id":12,"title":"Pastry - Apple Muffins - Mini","descriptionShort":"Supplement Left Patella with Autol Sub, Perc Endo Approach","descriptionLong":"Supplement Left Patella with Autologous Tissue Substitute, Percutaneous Endoscopic Approach","price":"670.20","currency":"SEK","amount":23,"image":"http://dummyimage.com/100x100.png/cc0000/ffffff"},
    {"id":13,"title":"Potatoes - Peeled","descriptionShort":"Bypass R Com Iliac Vein to Low Vein w Nonaut Sub, Open","descriptionLong":"Bypass Right Common Iliac Vein to Lower Vein with Nonautologous Tissue Substitute, Open Approach","price":"733.59","currency":"EUR","amount":60,"image":"http://dummyimage.com/100x100.png/5fa2dd/ffffff"},
    {"id":14,"title":"Pasta - Lasagna Noodle, Frozen","descriptionShort":"Supplement L Int Jugular Vein with Nonaut Sub, Perc Approach","descriptionLong":"Supplement Left Internal Jugular Vein with Nonautologous Tissue Substitute, Percutaneous Approach","price":"511.49","currency":"XOF","amount":89,"image":"http://dummyimage.com/100x100.png/ff4444/ffffff"},
    {"id":15,"title":"Parasol Pick Stir Stick","descriptionShort":"Insert Infusion Dev in L Ext Jugular Vein, Perc","descriptionLong":"Insertion of Infusion Device into Left External Jugular Vein, Percutaneous Approach","price":"124.04","currency":"EUR","amount":99,"image":"http://dummyimage.com/100x100.png/5fa2dd/ffffff"},
    {"id":16,"title":"Venison - Liver","descriptionShort":"Restrict Cystic Duct w Intralum Dev, Perc Endo","descriptionLong":"Restriction of Cystic Duct with Intraluminal Device, Percutaneous Endoscopic Approach","price":"676.94","currency":"COP","amount":63,"image":"http://dummyimage.com/100x100.png/5fa2dd/ffffff"},
    {"id":17,"title":"Cassis","descriptionShort":"Low Dose Rate (LDR) Brachytherapy of Ear using Other Isotope","descriptionLong":"Low Dose Rate (LDR) Brachytherapy of Ear using Other Isotope","price":"19.87","currency":"SYP","amount":46,"image":"http://dummyimage.com/100x100.png/5fa2dd/ffffff"},
    {"id":18,"title":"Coffee - 10oz Cup 92961","descriptionShort":"Fluoroscopy of Superior Vena Cava using Other Contrast","descriptionLong":"Fluoroscopy of Superior Vena Cava using Other Contrast","price":"138.20","currency":"IDR","amount":90,"image":"http://dummyimage.com/100x100.png/cc0000/ffffff"},
    {"id":19,"title":"Thyme - Lemon, Fresh","descriptionShort":"Fluoroscopy of Dialysis Shunt using L Osm Contrast, Guidance","descriptionLong":"Fluoroscopy of Dialysis Shunt/Fistula using Low Osmolar Contrast, Guidance","price":"952.80","currency":"AOA","amount":8,"image":"http://dummyimage.com/100x100.png/ff4444/ffffff"},
    {"id":20,"title":"Wine - Rioja Campo Viejo","descriptionShort":"Imaging, Non-Axial Upper Bones, Fluoroscopy","descriptionLong":"Imaging, Non-Axial Upper Bones, Fluoroscopy","price":"312.25","currency":"PLN","amount":45,"image":"http://dummyimage.com/100x100.png/ff4444/ffffff"},
    {"id":21,"title":"Cup - Translucent 7 Oz Clear","descriptionShort":"Removal of Spacer from Coccygeal Joint, Perc Endo Approach","descriptionLong":"Removal of Spacer from Coccygeal Joint, Percutaneous Endoscopic Approach","price":"102.84","currency":"RUB","amount":86,"image":"http://dummyimage.com/100x100.png/dddddd/000000"},
    {"id":22,"title":"Sprouts - Peppercress","descriptionShort":"Fluoroscopy Oth Intraabd Art w H Osm Contrast, Laser Intraop","descriptionLong":"Fluoroscopy of Other Intra-Abdominal Arteries using High Osmolar Contrast, Laser Intraoperative","price":"502.99","currency":"CNY","amount":81,"image":"http://dummyimage.com/100x100.png/5fa2dd/ffffff"},
    {"id":23,"title":"Pastry - Banana Muffin - Mini","descriptionShort":"Revision of Autol Sub in L Humeral Shaft, Perc Endo Approach","descriptionLong":"Revision of Autologous Tissue Substitute in Left Humeral Shaft, Percutaneous Endoscopic Approach","price":"678.97","currency":"RUB","amount":19,"image":"http://dummyimage.com/100x100.png/dddddd/000000"},
    {"id":24,"title":"Dill Weed - Fresh","descriptionShort":"Supplement Ileocecal Valve with Nonaut Sub, Endo","descriptionLong":"Supplement Ileocecal Valve with Nonautologous Tissue Substitute, Via Natural or Artificial Opening Endoscopic","price":"756.66","currency":"IDR","amount":41,"image":"http://dummyimage.com/100x100.png/cc0000/ffffff"},
    {"id":25,"title":"Anchovy Paste - 56 G Tube","descriptionShort":"Insertion of Radioactive Element into Cervix, Via Opening","descriptionLong":"Insertion of Radioactive Element into Cervix, Via Natural or Artificial Opening","price":"374.03","currency":"CNY","amount":63,"image":"http://dummyimage.com/100x100.png/cc0000/ffffff"},
    {"id":26,"title":"Chervil - Fresh","descriptionShort":"Fusion of Left Finger Phalangeal Joint, Open Approach","descriptionLong":"Fusion of Left Finger Phalangeal Joint, Open Approach","price":"79.59","currency":"ARS","amount":77,"image":"http://dummyimage.com/100x100.png/5fa2dd/ffffff"},
    {"id":27,"title":"Mousse - Mango","descriptionShort":"Insertion of Spacer into Occip Jt, Perc Approach","descriptionLong":"Insertion of Spacer into Occipital-cervical Joint, Percutaneous Approach","price":"325.10","currency":"PHP","amount":77,"image":"http://dummyimage.com/100x100.png/ff4444/ffffff"},
    {"id":28,"title":"Chicken - Diced, Cooked","descriptionShort":"Reattachment of Left Upper Extremity, Open Approach","descriptionLong":"Reattachment of Left Upper Extremity, Open Approach","price":"593.63","currency":"PHP","amount":59,"image":"http://dummyimage.com/100x100.png/dddddd/000000"},
    {"id":29,"title":"Shrimp - 31/40","descriptionShort":"Bypass Descending Colon to Rectum, Perc Endo Approach","descriptionLong":"Bypass Descending Colon to Rectum, Percutaneous Endoscopic Approach","price":"764.00","currency":"IDR","amount":12,"image":"http://dummyimage.com/100x100.png/dddddd/000000"},
    {"id":30,"title":"Towel - Roll White","descriptionShort":"Division of Right Ear Skin, External Approach","descriptionLong":"Division of Right Ear Skin, External Approach","price":"874.19","currency":"RSD","amount":95,"image":"http://dummyimage.com/100x100.png/cc0000/ffffff"},
    {"id":31,"title":"Creme De Menth - White","descriptionShort":"Resection of Bilateral Seminal Vesicles, Perc Endo Approach","descriptionLong":"Resection of Bilateral Seminal Vesicles, Percutaneous Endoscopic Approach","price":"198.90","currency":"USD","amount":20,"image":"http://dummyimage.com/100x100.png/dddddd/000000"},
    {"id":32,"title":"Sauce - Chili","descriptionShort":"Supplement Gastric Artery with Autol Sub, Perc Approach","descriptionLong":"Supplement Gastric Artery with Autologous Tissue Substitute, Percutaneous Approach","price":"718.45","currency":"HRK","amount":94,"image":"http://dummyimage.com/100x100.png/ff4444/ffffff"},
    {"id":33,"title":"Pepper - Chipotle, Canned","descriptionShort":"Extirpation of Matter from L Extraoc Muscle, Extern Approach","descriptionLong":"Extirpation of Matter from Left Extraocular Muscle, External Approach","price":"417.33","currency":"VND","amount":98,"image":"http://dummyimage.com/100x100.png/dddddd/000000"},
    {"id":34,"title":"Flower - Potmums","descriptionShort":"Reposition L Humeral Head with Hybrid Ext Fix, Open Approach","descriptionLong":"Reposition Left Humeral Head with Hybrid External Fixation Device, Open Approach","price":"730.79","currency":"IDR","amount":10,"image":"http://dummyimage.com/100x100.png/ff4444/ffffff"},
    {"id":35,"title":"Flour - Fast / Rapid","descriptionShort":"Repair Thyroid Gland Isthmus, Perc Endo Approach","descriptionLong":"Repair Thyroid Gland Isthmus, Percutaneous Endoscopic Approach","price":"534.30","currency":"BAM","amount":32,"image":"http://dummyimage.com/100x100.png/cc0000/ffffff"},
    {"id":36,"title":"Wine - White, Chardonnay","descriptionShort":"Fusion of R Temporomandib Jt with Autol Sub, Open Approach","descriptionLong":"Fusion of Right Temporomandibular Joint with Autologous Tissue Substitute, Open Approach","price":"45.14","currency":"IDR","amount":86,"image":"http://dummyimage.com/100x100.png/cc0000/ffffff"},
    {"id":37,"title":"Fond - Chocolate","descriptionShort":"Removal of Ext Fix from R Wrist Jt, Extern Approach","descriptionLong":"Removal of External Fixation Device from Right Wrist Joint, External Approach","price":"549.49","currency":"EUR","amount":73,"image":"http://dummyimage.com/100x100.png/ff4444/ffffff"},
    {"id":38,"title":"Salsify, Organic","descriptionShort":"Removal of Autol Sub from R Ear, Open Approach","descriptionLong":"Removal of Autologous Tissue Substitute from Right Ear, Open Approach","price":"225.49","currency":"THB","amount":36,"image":"http://dummyimage.com/100x100.png/cc0000/ffffff"},
    {"id":39,"title":"Gingerale - Schweppes, 355 Ml","descriptionShort":"Removal of Int Fix from R Wrist Jt, Perc Endo Approach","descriptionLong":"Removal of Internal Fixation Device from Right Wrist Joint, Percutaneous Endoscopic Approach","price":"972.11","currency":"KGS","amount":27,"image":"http://dummyimage.com/100x100.png/dddddd/000000"},
    {"id":40,"title":"Shrimp - Baby, Warm Water","descriptionShort":"Division of Left Tarsal, Percutaneous Endoscopic Approach","descriptionLong":"Division of Left Tarsal, Percutaneous Endoscopic Approach","price":"496.12","currency":"IDR","amount":85,"image":"http://dummyimage.com/100x100.png/cc0000/ffffff"},
    {"id":41,"title":"Foil Wrap","descriptionShort":"Excision of Conduction Mechanism, Open Approach","descriptionLong":"Excision of Conduction Mechanism, Open Approach","price":"466.16","currency":"IDR","amount":43,"image":"http://dummyimage.com/100x100.png/cc0000/ffffff"},
    {"id":42,"title":"Sauce - Apple, Unsweetened","descriptionShort":"Insertion of Int Fix into L Tarsal, Perc Approach","descriptionLong":"Insertion of Internal Fixation Device into Left Tarsal, Percutaneous Approach","price":"291.70","currency":"CAD","amount":94,"image":"http://dummyimage.com/100x100.png/dddddd/000000"},
    {"id":43,"title":"Chicken - Leg / Back Attach","descriptionShort":"Extraction of Thoracic Nerve, Percutaneous Approach","descriptionLong":"Extraction of Thoracic Nerve, Percutaneous Approach","price":"397.54","currency":"CNY","amount":48,"image":"http://dummyimage.com/100x100.png/cc0000/ffffff"},
    {"id":44,"title":"Rabbit - Legs","descriptionShort":"Inspection of Left Ear, Open Approach","descriptionLong":"Inspection of Left Ear, Open Approach","price":"637.21","currency":"EUR","amount":87,"image":"http://dummyimage.com/100x100.png/cc0000/ffffff"},
    {"id":45,"title":"Bread - Italian Roll With Herbs","descriptionShort":"Supplement Lesser Omentum with Nonaut Sub, Open Approach","descriptionLong":"Supplement Lesser Omentum with Nonautologous Tissue Substitute, Open Approach","price":"798.44","currency":"EUR","amount":6,"image":"http://dummyimage.com/100x100.png/cc0000/ffffff"},
    {"id":46,"title":"Swiss Chard - Red","descriptionShort":"Dilate R Temporal Art, Bifurc, w Drug-elut Intra, Perc","descriptionLong":"Dilation of Right Temporal Artery, Bifurcation, with Drug-eluting Intraluminal Device, Percutaneous Approach","price":"431.55","currency":"KRW","amount":71,"image":"http://dummyimage.com/100x100.png/dddddd/000000"},
    {"id":47,"title":"Bread - Roll, Italian","descriptionShort":"Dilate R Int Mamm Art, Bifurc, w Drug-elut Intra, Perc","descriptionLong":"Dilation of Right Internal Mammary Artery, Bifurcation, with Drug-eluting Intraluminal Device, Percutaneous Approach","price":"717.68","currency":"IDR","amount":40,"image":"http://dummyimage.com/100x100.png/dddddd/000000"},
    {"id":48,"title":"Danishes - Mini Raspberry","descriptionShort":"Occlusion of L Popl Art with Extralum Dev, Perc Approach","descriptionLong":"Occlusion of Left Popliteal Artery with Extraluminal Device, Percutaneous Approach","price":"705.51","currency":"BRL","amount":7,"image":"http://dummyimage.com/100x100.png/cc0000/ffffff"},
    {"id":49,"title":"Carrots - Jumbo","descriptionShort":"Dilation of L Com Carotid with 3 Drug-elut, Perc Approach","descriptionLong":"Dilation of Left Common Carotid Artery with Three Drug-eluting Intraluminal Devices, Percutaneous Approach","price":"704.58","currency":"IDR","amount":54,"image":"http://dummyimage.com/100x100.png/ff4444/ffffff"},
    {"id":50,"title":"Squid - U - 10 Thailand","descriptionShort":"Bypass R Ventricle to Pulm Trunk w Zooplastic, Open","descriptionLong":"Bypass Right Ventricle to Pulmonary Trunk with Zooplastic Tissue, Open Approach","price":"428.57","currency":"CUP","amount":21,"image":"http://dummyimage.com/100x100.png/cc0000/ffffff"},

  ];

  constructor() { }

  public getAllProducts$(): Observable<Product[]> {
    return of(this.products);
  }

  public getProductCount(): number {
    return this.products.length;
  }

  public getProductById(id: number): Product {
    return this.products.find(product => product.id === id);
  }

  private productContainsSearchString(product: Product, filterString: string): boolean {
    return (
      product.title.toLowerCase().indexOf(filterString) >= 0 ||
      product.descriptionShort.indexOf(filterString) >= 0 ||
      product.descriptionLong.indexOf(filterString) >= 0
    )
  }

  public getFilteredProducts$(filterString: string): Observable<Product[]> {
    return of(this.products).pipe(
      map(products => products.filter(product => this.productContainsSearchString(product, filterString.toLowerCase())))
    );
  }
}
