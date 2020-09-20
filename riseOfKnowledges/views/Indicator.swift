//
//  Indicator.swift
//  riseOfKnowledges
//
//  Created by Florian Beaumont on 9/18/20.
//  Copyright © 2020 Florian Beaumont. All rights reserved.
//

import SwiftUI

struct Indicator : UIViewRepresentable {
    
    func makeUIView(context: Context) -> UIActivityIndicatorView {
        let view = UIActivityIndicatorView(style: .large)
        view.startAnimating()
        return view
    }
    
    func updateUIView(_ uiView: UIActivityIndicatorView, context: Context) {
        
    }
}
