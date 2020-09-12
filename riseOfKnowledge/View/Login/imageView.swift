//
//  imageView.swift
//  riseOfKnowledge
//
//  Created by Florian Beaumont on 9/13/20.
//  Copyright © 2020 Florian Beaumont. All rights reserved.
//

import SwiftUI

struct imageView: View {
    var body: some View {
        Image("planet")
            .padding(.horizontal)
            .padding(.vertical, 20)
            .background(Color.white.opacity(0.2))
            .cornerRadius(30)
    }
}

struct imageView_Previews: PreviewProvider {
    static var previews: some View {
        imageView()
    }
}
